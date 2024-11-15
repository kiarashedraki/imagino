import {
  Controller,
  Post,
  Body,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';
import * as FormData from 'form-data';
import { v4 as uuidv4 } from 'uuid';
import { addMinutes } from 'date-fns';

@Controller()
export class AppController {
  constructor(private readonly configService: ConfigService) {}

  @Post('generate-direct-upload-urls')
  async generateDirectUploadUrls(@Body() body: any) {
    // Fetch credentials from environment variables
    const accountId = this.configService.get<string>('CLOUDFLARE_ACCOUNT_ID');
    const apiToken = this.configService.get<string>('CLOUDFLARE_API_TOKEN');

    const url = `https://api.cloudflare.com/client/v4/accounts/${accountId}/images/v2/direct_upload`;

    // Extract parameters from the request body
    const { count, requireSignedURLs, metadata } = body;

    if (!count || count <= 0) {
      throw new HttpException(
        'Count must be a positive integer',
        HttpStatus.BAD_REQUEST,
      );
    }

    try {
      const results = [];
      const currentTime = new Date();
      const expiry = addMinutes(currentTime, 10).toISOString(); // Set expiry to 10 minutes from now

      for (let i = 0; i < count; i++) {
        // Generate a unique UUID for each file
        const fileId = uuidv4();
        console.log(`Generated UUID for file ${i + 1}: ${fileId}`);

        // Include the UUID in the metadata
        const enrichedMetadata = {
          ...metadata,
          fileId, // Add the UUID to the metadata
        };

        // Prepare form data for each request
        const formData = new FormData();
        formData.append(
          'requireSignedURLs',
          String(requireSignedURLs || false),
        );
        formData.append('metadata', JSON.stringify(enrichedMetadata));
        formData.append('expiry', expiry); // Set the expiry

        const response = await axios.post(url, formData, {
          headers: {
            Authorization: `Bearer ${apiToken}`,
            ...formData.getHeaders(), // Ensure multipart/form-data headers are included
          },
        });

        if (response.data.success) {
          results.push(response.data.result);
        } else {
          throw new HttpException(
            response.data.errors ||
              `Failed to generate one of the direct upload URLs`,
            HttpStatus.BAD_REQUEST,
          );
        }
      }

      // Return all generated URLs
      return { success: true, urls: results };
    } catch (error) {
      // Handle errors
      console.error('Error generating direct upload URLs:', error.message);
      if (axios.isAxiosError(error)) {
        throw new HttpException(
          error.response?.data || 'Error generating direct upload URLs',
          error.response?.status || HttpStatus.INTERNAL_SERVER_ERROR,
        );
      } else {
        throw new HttpException(
          'Unexpected error occurred',
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      }
    }
  }
}
