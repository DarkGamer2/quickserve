use serde::Deserialize;
use serde::Serialize;
use reqwest::Client;

// Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}

#[derive(Serialize, Deserialize)]
struct RegisterRequest {
    full_name: String,
    email: String,
    password: String,
    confirm_password: String,
    skillset: Vec<String>,
}

#[derive(Serialize)]
struct RegisterResponse {
    success: bool,
    message: String,
}

#[tauri::command]
async fn register(request: RegisterRequest) -> Result<RegisterResponse, String> {
    let client = Client::new();
    let res = client.post("http://localhost:3000/api/auth/register")
        .json(&request)
        .send()
        .await;

    match res {
        Ok(response) => {
            if response.status().is_success() {
                Ok(RegisterResponse {
                    success: true,
                    message: "Registration successful".into(),
                })
            } else {
                Err("Registration failed".into())
            }
        }
        Err(_) => Err("Failed to send request".into()),
    }
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_shell::init())
        .invoke_handler(tauri::generate_handler![greet, register])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}