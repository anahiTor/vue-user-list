export const TABLE_HEAD = [
  { title: 'Id', field: 'id' },
  { title: 'First Name', field: 'firstName' },
  { title: 'Last Name', field: 'lastName' },
  { title: 'Email', field: 'email' },
  { title: 'Last Visited At', field: 'lastVisitedAt' },
  { title: 'Actions', field: 'actions' }
]

export const LAST_VISITED_AT = 'lastVisitedAt'

export const EDITABLE_FIELDS = ['firstName', 'lastName', 'email']
export const SORTABLE_FIELDS = ['firstName', 'lastName', 'id']

export const DATE_OPTIONS: Intl.DateTimeFormatOptions = {
  hour: '2-digit',
  minute: '2-digit',
  year: 'numeric',
  month: '2-digit',
  day: 'numeric'
}

export const ADD_USER_FIELDS = [
  {
    name: 'firstName',
    label: 'First Name',
    type: 'text'
  },
  {
    name: 'lastName',
    label: 'Last Name',
    type: 'text'
  },
  {
    name: 'email',
    label: 'Email',
    type: 'email'
  }
]
