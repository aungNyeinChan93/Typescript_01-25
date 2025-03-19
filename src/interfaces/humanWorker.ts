import { BaseWorker } from './baseWorker'

export interface HumanWorker extends BaseWorker {
    work(): void,
    sleep(): void,
    eat(): void
}