
const VALUE_MAPPERS = {
    A4: [
        'starts-from-one', 'Never married', 
        'Married', 'Widowed', 'Separated',
        'Divorced', 'Unkwnown'
    ],
    A8: [
        'starts-from-one', // This value is always greater than 0
        'Private home / apartment / rented room', 
        'Board and care home',
        'Assisted living or semi-independent living',
        'Mental health residence — e.g., psychiatric group home',
        'Group home for persons with physical disability',
        'Setting for persons with intellectual disability',
        'Psychiatric hospital or unit',
        'Homeless (with or without shelter)',
        'Long-term care facility (i.e., nursing home)',
        'Rehabilitation hospital / unit',
        'Hospice facility / palliative care unit',
        'Acute care hospital', 
        'Correctional facility', 
        'Other'
    ],
    A9: [
        'starts-from-one', // This value is always greater than 0
        'Alone',
        'With spouse / partner only',
        'With spouse / partner and other(s)',
        'With child (not spouse / partner)',
        'With parent(s) or guardian(s)',
        'With sibling(s)',
        'With other relative(s)',
        'With nonrelative(s)'
    ]
}

export default VALUE_MAPPERS
