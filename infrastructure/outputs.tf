output "client_url" {
  value = google_cloud_run_service.client.status[0].url
}
