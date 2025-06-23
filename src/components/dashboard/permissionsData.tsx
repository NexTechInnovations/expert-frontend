export const roles = ["Decision Maker", "Advisor", "Admin", "Basic Admin", "Agent", "Finance", "Limited Access User"];

export const permissionsData = [
    {
        category: "Contracts & Invoices",
        permissions: [
            { name: "View Contracts, Payments, & Invoices", access: [true, true, true, false, false, true, false] },
            { name: "Manage Contracts, Payments, & Invoices", access: [true, true, false, false, false, true, false] },
        ]
    },
    {
        category: "Properties",
        permissions: [
            { name: "View Listings", access: [true, true, true, true, true, false, true] },
            { name: "Create New Listing", access: [true, true, true, true, false, false, false] },
            { name: "Update Listing Details", access: [true, true, true, true, false, false, true] },
            { name: "Delete Listings", access: [true, true, true, true, false, false, false] },
            { name: "Publish Listings", access: [true, true, true, true, false, false, false] },
            { name: "Unpublish Listings", access: [true, true, true, true, false, false, false] },
            { name: "Spotlight Listings", access: [true, true, true, true, false, false, false] },
            { name: "Auto Renew Listings", access: [true, true, true, false, false, false, false] },
            { name: "Archive Listing", access: [true, true, true, false, false, false, true] },
            { name: "Approve/Refuse Listing", access: [true, true, false, false, false, false, true] },
            { name: "Upgrade Listing To Featured", access: [true, true, true, false, false, false, false] },
            { name: "Upgrade Listing To Premium", access: [true, true, true, false, false, false, false] },
            { name: "Downgrade Listing", access: [true, true, true, false, false, false, false] },
            { name: "Preview Listing", access: [true, true, true, true, true, false, true] },
            { name: "Claim Transaction For A Listing", access: [true, true, true, false, false, false, true] },
            { name: "Access Listing Options", access: [true, true, true, true, false, false, true] },
            { name: "Change Listing Assignment", access: [true, true, true, true, false, false, false] },
            { name: "View Listings Action Tracker", access: [true, true, true, true, true, false, true] },
            { name: "Take Action On Listings In Action Tracker", access: [true, true, true, false, false, false, true] },
        ]
    },
    // Add other categories here...
    {
        category: "Leads",
        permissions: [
            { name: "View Regular Leads", access: [true, true, true, true, true, false, false] },
            { name: "Create & Update Regular Leads", access: [true, true, true, true, false, false, false] },
        ]
    }
];