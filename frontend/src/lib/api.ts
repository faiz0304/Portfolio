const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

interface ContactPayload {
    name: string;
    email: string;
    message: string;
}

interface ApiResponse {
    success: boolean;
    message?: string;
}

export async function submitContactForm(
    payload: ContactPayload
): Promise<ApiResponse> {
    const res = await fetch(`${API_BASE}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
    });

    if (!res.ok) {
        throw new Error(`API error: ${res.status}`);
    }

    return res.json();
}

export function getResumeUrl(): string {
    return `${API_BASE}/api/resume`;
}
