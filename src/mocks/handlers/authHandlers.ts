import { http, HttpResponse } from "msw";

export const authHandlers = [
  http.get("/api/auth/me", () => {
    return HttpResponse.json({
      id: "a1b2c3d4",
      email: "user@example.com",
      fullName: "John Doe",
      role: "admin",
      permissions: ["users.read", "users.write", "settings.update"],
      createdAt: "2025-09-15T10:23:00.000Z",
      updatedAt: "2025-10-01T14:52:00.000Z",
    });
  }),
  http.get("/api/auth/refresh", () => {
    return HttpResponse.json({
      accessToken: "eyJhbGciOiJIUzI1NiIsInR...",
      expiresIn: 3600,
    });
  }),
];
