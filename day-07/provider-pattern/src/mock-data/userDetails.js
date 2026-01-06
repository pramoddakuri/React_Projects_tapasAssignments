const userDetails = [
    {
        id: 1,
        name: "Admin User",
        email: "admin@example.com",
        password: "admin123!",
        role: "admin",
        privileges: ["create", "read", "update", "delete", "manage_users", "manage_roles"],
    },
    {
        id: 2,
        name: "Editor User",
        email: "editor@example.com",
        password: "editor123!",
        role: "editor",
        privileges: ["create", "read", "update", "delete"],
    },
    {
        id: 3,
        name: "Viewer User",
        email: "viewer@example.com",
        password: "viewer123!",
        role: "viewer",
        privileges: ["read"],
    },
    {
        id: 4,
        name: "Moderator User",
        email: "moderator@example.com",
        password: "moderator123!",
        role: "moderator",
        privileges: ["read", "update", "delete", "manage_comments"],
    },
];

export default userDetails;