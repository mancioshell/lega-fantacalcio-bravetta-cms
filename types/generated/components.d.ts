import type { Schema, Attribute } from '@strapi/strapi';

export interface ReportMatches extends Schema.Component {
  collectionName: 'components_match_matches';
  info: {
    displayName: 'match';
    icon: 'calendar';
    description: '';
  };
  attributes: {
    home_report: Attribute.Component<'report.report'> & Attribute.Required;
    guest_report: Attribute.Component<'report.report'> & Attribute.Required;
  };
}

export interface ReportReport extends Schema.Component {
  collectionName: 'components_team_report_reports';
  info: {
    displayName: 'TeamReport';
    icon: 'file';
    description: '';
  };
  attributes: {
    team: Attribute.Relation<'report.report', 'oneToOne', 'api::team.team'>;
    report: Attribute.RichText & Attribute.Required;
    vote: Attribute.Decimal & Attribute.Required;
    picture: Attribute.Media;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'report.matches': ReportMatches;
      'report.report': ReportReport;
    }
  }
}
