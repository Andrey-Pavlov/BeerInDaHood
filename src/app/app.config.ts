import { OpaqueToken } from '@angular/core';
import * as config from '../../config.json';
import {AppConfig} from './shared/interfaces/config/app-config.interface';

export const APP_CONFIG_VALUE: AppConfig = config;

export let APP_CONFIG = new OpaqueToken('app.config');
