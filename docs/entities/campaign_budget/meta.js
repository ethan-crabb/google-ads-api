module.exports = {
    name: 'CampaignBudget',
    object: {
        amount_micros: {
            _type: 'int64',
            _description:
                'The amount of the budget, in the local currency for the account.\nAmount is specified in micros, where one million is equivalent to one\ncurrency unit.',
        },
        explicitly_shared: {
            _type: 'boolean',
            _description:
                "Specifies whether the budget is explicitly shared. Defaults to true if\nunspecified in a create operation.\n\nIf true, the budget was created with the purpose of sharing\nacross one or more campaigns.\n\nIf false, the budget was created with the intention of only being used\nwith a single campaign. The budget's name and status will stay in sync\nwith the campaign's name and status. Attempting to share the budget with a\nsecond campaign will result in an error.\n\nA non-shared budget can become an explicitly shared. The same operation\nmust also assign the budget a name.\n\nA shared campaign budget can never become non-shared.",
        },
        reference_count: {
            _type: 'int64',
            _description: 'The number of campaigns actively using the budget.\n\nThis field is read-only.',
        },
        recommended_budget_amount_micros: {
            _type: 'int64',
            _description:
                'The recommended budget amount. If no recommendation is available, this will\nbe set to the budget amount.\nAmount is specified in micros, where one million is equivalent to one\ncurrency unit.\n\nThis field is read-only.',
        },
        status: {
            _type: 'enum',
            _enums: [
                { s: 'UNSPECIFIED', description: 'Not specified.' },
                { s: 'UNKNOWN', description: 'Used for return value only. Represents value unknown in this version.' },
                { s: 'ENABLED', description: 'Budget is enabled.' },
                { s: 'REMOVED', description: 'Budget is removed.' },
            ],
            _description: 'The status of this campaign budget. This field is read-only.',
        },
        has_recommended_budget: {
            _type: 'boolean',
            _description:
                'Indicates whether there is a recommended budget for this campaign budget.\n\nThis field is read-only.',
        },
        period: {
            _type: 'enum',
            _enums: [
                { s: 'UNSPECIFIED', description: 'Not specified.' },
                { s: 'UNKNOWN', description: 'Used for return value only. Represents value unknown in this version.' },
                { s: 'DAILY', description: 'Daily budget.' },
                { s: 'CUSTOM', description: 'Custom budget.' },
                { s: 'FIXED_DAILY', description: 'Fixed daily budget.' },
            ],
            _description: 'Period over which to spend the budget. Defaults to DAILY if not specified.',
        },
        name: {
            _type: 'string',
            _description:
                "The name of the campaign budget.\n\nWhen creating a campaign budget through CampaignBudgetService, every\nexplicitly shared campaign budget must have a non-null, non-empty name.\nCampaign budgets that are not explicitly shared derive their name from the\nattached campaign's name.\n\nThe length of this string must be between 1 and 255, inclusive,\nin UTF-8 bytes, (trimmed).",
        },
        id: {
            _type: 'int64',
            _description:
                'The ID of the campaign budget.\n\nA campaign budget is created using the CampaignBudgetService create\noperation and is assigned a budget ID. A budget ID can be shared across\ndifferent campaigns; the system will then allocate the campaign budget\namong different campaigns to get optimum results.',
        },
        resource_name: {
            _type: 'string',
            _description:
                'The resource name of the campaign budget.\nCampaign budget resource names have the form:\n\n`customers/{customer_id}/campaignBudgets/{budget_id}`',
        },
        recommended_budget_estimated_change_weekly_views: {
            _type: 'int64',
            _description:
                'The estimated change in weekly views if the recommended budget is applied.\n\nThis field is read-only.',
        },
        recommended_budget_estimated_change_weekly_interactions: {
            _type: 'int64',
            _description:
                'The estimated change in weekly interactions if the recommended budget is\napplied.\n\nThis field is read-only.',
        },
        delivery_method: {
            _type: 'enum',
            _enums: [
                { s: 'UNSPECIFIED', description: 'Not specified.' },
                { s: 'UNKNOWN', description: 'Used for return value only. Represents value unknown in this version.' },
                {
                    s: 'STANDARD',
                    description: 'The budget server will throttle serving evenly across\nthe entire time period.',
                },
                {
                    s: 'ACCELERATED',
                    description:
                        'The budget server will not throttle serving,\nand ads will serve as fast as possible.',
                },
            ],
            _description:
                'The delivery method that determines the rate at which the campaign budget\nis spent.\n\nDefaults to STANDARD if unspecified in a create operation.',
        },
        total_amount_micros: {
            _type: 'int64',
            _description:
                'The lifetime amount of the budget, in the local currency for the account.\nAmount is specified in micros, where one million is equivalent to one\ncurrency unit.',
        },
        recommended_budget_estimated_change_weekly_clicks: {
            _type: 'int64',
            _description:
                'The estimated change in weekly clicks if the recommended budget is applied.\n\nThis field is read-only.',
        },
        type: {
            _type: 'enum',
            _enums: [
                { s: 'UNSPECIFIED', description: 'Not specified.' },
                { s: 'UNKNOWN', description: 'Used for return value only. Represents value unknown in this version.' },
                { s: 'STANDARD', description: 'Budget type for standard Google Ads usage.' },
                { s: 'HOTEL_ADS_COMMISSION', description: 'Budget type for Hotels Ads commission program.' },
            ],
            _description: 'The type of the campaign budget.',
        },
        recommended_budget_estimated_change_weekly_cost_micros: {
            _type: 'int64',
            _description:
                'The estimated change in weekly cost in micros if the recommended budget is\napplied. One million is equivalent to one currency unit.\n\nThis field is read-only.',
        },
    },
    methods: ['get', 'list', 'create', 'update', 'delete'],
}
