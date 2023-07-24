import axios from "axios"
const djkjvbsjvAPI = axios.create({
  baseURL: "https://djkjvbsjv-10.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_docs_schema_retrieve(payload) {
  return djkjvbsjvAPI.get(`/api-docs/schema/`, {
    params: { lang: payload.lang }
  })
}
function api_v1_login_create(payload) {
  return djkjvbsjvAPI.post(`/api/v1/login/`, payload)
}
function api_v1_signup_create(payload) {
  return djkjvbsjvAPI.post(`/api/v1/signup/`, payload)
}
function modules_files_uploads_list(payload) {
  return djkjvbsjvAPI.get(`/modules/files/uploads/`)
}
function modules_files_uploads_create(payload) {
  return djkjvbsjvAPI.post(`/modules/files/uploads/`, payload)
}
function modules_files_uploads_retrieve(payload) {
  return djkjvbsjvAPI.get(`/modules/files/uploads/${payload.id}/`)
}
function modules_files_uploads_update(payload) {
  return djkjvbsjvAPI.put(`/modules/files/uploads/${payload.id}/`, payload)
}
function modules_files_uploads_partial_update(payload) {
  return djkjvbsjvAPI.patch(`/modules/files/uploads/${payload.id}/`, payload)
}
function modules_files_uploads_destroy(payload) {
  return djkjvbsjvAPI.delete(`/modules/files/uploads/${payload.id}/`)
}
function modules_social_auth_apple_connect_create(payload) {
  return djkjvbsjvAPI.post(`/modules/social-auth/apple/connect/`, payload)
}
function modules_social_auth_apple_login_create(payload) {
  return djkjvbsjvAPI.post(`/modules/social-auth/apple/login/`, payload)
}
function modules_social_auth_facebook_connect_create(payload) {
  return djkjvbsjvAPI.post(`/modules/social-auth/facebook/connect/`, payload)
}
function modules_social_auth_facebook_login_create(payload) {
  return djkjvbsjvAPI.post(`/modules/social-auth/facebook/login/`, payload)
}
function modules_social_auth_google_connect_create(payload) {
  return djkjvbsjvAPI.post(`/modules/social-auth/google/connect/`, payload)
}
function modules_social_auth_google_login_create(payload) {
  return djkjvbsjvAPI.post(`/modules/social-auth/google/login/`, payload)
}
function modules_social_auth_socialaccounts_list(payload) {
  return djkjvbsjvAPI.get(`/modules/social-auth/socialaccounts/`)
}
function modules_social_auth_socialaccounts_disconnect_create(payload) {
  return djkjvbsjvAPI.post(
    `/modules/social-auth/socialaccounts/${payload.id}/disconnect/`,
    payload
  )
}
function modules_zoominfo_auth_token_create(payload) {
  return djkjvbsjvAPI.post(`/modules/zoominfo/auth/token/`)
}
function modules_zoominfo_data_bulk_create(payload) {
  return djkjvbsjvAPI.post(`/modules/zoominfo/data/bulk/`)
}
function modules_zoominfo_data_enrich_create(payload) {
  return djkjvbsjvAPI.post(`/modules/zoominfo/data/enrich/`)
}
function modules_zoominfo_data_search_create(payload) {
  return djkjvbsjvAPI.post(`/modules/zoominfo/data/search/`)
}
function rest_auth_login_create(payload) {
  return djkjvbsjvAPI.post(`/rest-auth/login/`, payload)
}
function rest_auth_logout_retrieve(payload) {
  return djkjvbsjvAPI.get(`/rest-auth/logout/`)
}
function rest_auth_logout_create(payload) {
  return djkjvbsjvAPI.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(payload) {
  return djkjvbsjvAPI.post(`/rest-auth/password/change/`, payload)
}
function rest_auth_password_reset_create(payload) {
  return djkjvbsjvAPI.post(`/rest-auth/password/reset/`, payload)
}
function rest_auth_password_reset_confirm_create(payload) {
  return djkjvbsjvAPI.post(`/rest-auth/password/reset/confirm/`, payload)
}
function rest_auth_registration_create(payload) {
  return djkjvbsjvAPI.post(`/rest-auth/registration/`, payload)
}
function rest_auth_registration_verify_email_create(payload) {
  return djkjvbsjvAPI.post(`/rest-auth/registration/verify-email/`, payload)
}
function rest_auth_user_retrieve(payload) {
  return djkjvbsjvAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return djkjvbsjvAPI.put(`/rest-auth/user/`, payload)
}
function rest_auth_user_partial_update(payload) {
  return djkjvbsjvAPI.patch(`/rest-auth/user/`, payload)
}
export const apiService = {
  api_docs_schema_retrieve,
  api_v1_login_create,
  api_v1_signup_create,
  modules_files_uploads_list,
  modules_files_uploads_create,
  modules_files_uploads_retrieve,
  modules_files_uploads_update,
  modules_files_uploads_partial_update,
  modules_files_uploads_destroy,
  modules_social_auth_apple_connect_create,
  modules_social_auth_apple_login_create,
  modules_social_auth_facebook_connect_create,
  modules_social_auth_facebook_login_create,
  modules_social_auth_google_connect_create,
  modules_social_auth_google_login_create,
  modules_social_auth_socialaccounts_list,
  modules_social_auth_socialaccounts_disconnect_create,
  modules_zoominfo_auth_token_create,
  modules_zoominfo_data_bulk_create,
  modules_zoominfo_data_enrich_create,
  modules_zoominfo_data_search_create,
  rest_auth_login_create,
  rest_auth_logout_retrieve,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update
}
