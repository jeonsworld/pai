/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License in the project root for license information.
 * @author Microsoft
 */

import { IPAICluster as ICluster } from 'openpai-js-sdk';

export interface IPAICluster extends ICluster {
    name?: string;
}
