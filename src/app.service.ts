import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return '<h1>Wodo Platform APIs</h1>' +
    '<h2>Rest APIs</h2>' +
    '<ul>' + 
    '<li><a href="/docs">All APIs</a></li>'+
    '</ul>' +
    '<h2>Events</h2>' +
    '<ul>' + 
    '<li><a href="/wp-iam-service-api.html">Wodo Platform IAM Service API</a></li>'+
    '<li><a href="/wg-iam-service-api.html">Wodo Gaming IAM Service API</a></li>'+
    '<li><a href="/wg-gaming-service-api.html">Wodo Gaming Service API</a></li>'+
    '<li><a href="/wp-blockchain-payment-service-api.html">Wodo Platform Blockchain Payment Service API</a></li>'+
    '</ul>';
  }
}
