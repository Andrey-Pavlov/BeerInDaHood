import { HistoryPathsConfig } from './pipelines/history-paths-config.interface';
import { HealthCheckPathsConfig } from './pipelines/health-check-paths-config.interface';
import { PipelinePathsConfig } from './pipelines/pipeline-paths-config.interface';
import {BeersPathsConfig} from './beers-paths-config.interface';
import {FeaturesPathsConfig} from './features-paths-config.interface';

export interface AppConfig {
    endpoint: string;
    paths: {
      beers: BeersPathsConfig;
      features: FeaturesPathsConfig;
      heartbeat: string;
    };
}
