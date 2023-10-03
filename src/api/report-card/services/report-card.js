'use strict';

/**
 * report-card service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::report-card.report-card');
