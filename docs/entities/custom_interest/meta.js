module.exports = {
    name: 'CustomInterest',
    object: {
        members: {
            _type: 'array',
            _description:
                'List of custom interest members that this custom interest is composed of.\nMembers can be added during CustomInterest creation. If members are\npresented in UPDATE operation, existing members will be overridden.',
        },
        status: {
            _type: 'enum',
            _enums: [
                { s: 'UNSPECIFIED', description: 'Not specified.' },
                { s: 'UNKNOWN', description: 'Used for return value only. Represents value unknown in this version.' },
                { s: 'ENABLED', description: 'Enabled status - custom interest is enabled and can be targeted to.' },
                {
                    s: 'REMOVED',
                    description: 'Removed status - custom interest is removed and cannot be used for\ntargeting.',
                },
            ],
            _description:
                'Status of this custom interest. Indicates whether the custom interest is\nenabled or removed.',
        },
        name: {
            _type: 'string',
            _description:
                'Name of the custom interest. It should be unique across the same custom\naffinity audience.\nThis field is required for create operations.',
        },
        type: {
            _type: 'enum',
            _enums: [
                { s: 'UNSPECIFIED', description: 'Not specified.' },
                { s: 'UNKNOWN', description: 'Used for return value only. Represents value unknown in this version.' },
                {
                    s: 'CUSTOM_AFFINITY',
                    description: 'Allows brand advertisers to define custom affinity audience lists.',
                },
                { s: 'CUSTOM_INTENT', description: 'Allows advertisers to define custom intent audience lists.' },
            ],
            _description:
                'Type of the custom interest, CUSTOM_AFFINITY or CUSTOM_INTENT.\nBy default the type is set to CUSTOM_AFFINITY.',
        },
        id: { _type: 'int64', _description: 'Id of the custom interest.' },
        resource_name: {
            _type: 'string',
            _description:
                'The resource name of the custom interest.\nCustom interest resource names have the form:\n\n`customers/{customer_id}/customInterests/{custom_interest_id}`',
        },
        description: { _type: 'string', _description: 'Description of this custom interest audience.' },
    },
    methods: ['get', 'list', 'create', 'update', 'delete'],
}
