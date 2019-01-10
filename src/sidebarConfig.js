import frappe from 'frappejs';
import { _ } from 'frappejs/utils';

export default {
  async getTitle() {
    return 'JSFoo'
  },
  groups: [
    {
      title: _('Models'),
      items: [
        {
          label: _('Model'), route: '#/list/Model'
        }
      ]
    }
  ]
};
