import { CompanyInterface } from 'interfaces/company';
import { GetQueryInterface } from 'interfaces';

export interface JobApplicationInterface {
  id?: string;
  first_name: string;
  last_name: string;
  email: string;
  position_applied: string;
  company_id: string;
  created_at?: any;
  updated_at?: any;

  company?: CompanyInterface;
  _count?: {};
}

export interface JobApplicationGetQueryInterface extends GetQueryInterface {
  id?: string;
  first_name?: string;
  last_name?: string;
  email?: string;
  position_applied?: string;
  company_id?: string;
}
