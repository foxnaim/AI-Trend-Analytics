// Тип тренда (Trend)
export interface Trend {
 id: string;
 name: string;
 popularity: number;
 category: string;
 createdAt: string;
}

// Тип пользователя (User)
export interface User {
 id: string;
 name: string;
 email: string;
 avatarUrl?: string;
 role: "user" | "admin";
 createdAt: string;
}

// Общий ответ от API (APIResponse)
export interface APIResponse<T> {
 success: boolean;
 data: T;
 message?: string;
}
