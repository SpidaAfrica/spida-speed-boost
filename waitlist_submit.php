<?php
// SPIDA Waitlist Submission Handler
// Upload this file to: /public_html/api/waitlist_submit.php (on your cPanel server)

// Enable error reporting for debugging (remove in production)
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Database configuration
$servername = "localhost";
$username = "YOUR_CPANEL_MYSQL_USERNAME";  // ← Replace with your MySQL username
$password = "YOUR_MYSQL_PASSWORD";          // ← Replace with your MySQL password
$dbname = "spidvvmg_waitlist";              // Your database name from phpMyAdmin

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get form data
$list_name = $_POST['list_name'] ?? '';
$full_name = $_POST['full_name'] ?? '';
$email = $_POST['email'] ?? '';
$phone = $_POST['phone'] ?? '';
$company_name = $_POST['company_name'] ?? '';
$company_type = $_POST['company_type'] ?? '';
$subject = $_POST['subject'] ?? '';
$message = $_POST['message'] ?? '';

// Honeypot check (spam protection)
if (!empty($_POST['company'])) {
    // This is spam - the hidden "company" field should always be empty
    die("Spam detected");
}

// Validate required fields
if (empty($list_name) || empty($full_name) || empty($email)) {
    die("Missing required fields");
}

// Sanitize inputs to prevent SQL injection
$list_name = $conn->real_escape_string($list_name);
$full_name = $conn->real_escape_string($full_name);
$email = $conn->real_escape_string($email);
$phone = $conn->real_escape_string($phone);
$company_name = $conn->real_escape_string($company_name);
$company_type = $conn->real_escape_string($company_type);
$subject = $conn->real_escape_string($subject);
$message = $conn->real_escape_string($message);

// Get user's IP address and user agent for tracking
$ip_addr = $_SERVER['REMOTE_ADDR'] ?? '';
$user_agent = $_SERVER['HTTP_USER_AGENT'] ?? '';
$source_url = $_SERVER['HTTP_REFERER'] ?? '';

// Insert into database
$sql = "INSERT INTO waitlist_signups 
        (list_name, full_name, email, phone, company_name, company_type, subject, message, source_url, ip_addr, user_agent, created_at) 
        VALUES 
        ('$list_name', '$full_name', '$email', '$phone', '$company_name', '$company_type', '$subject', '$message', '$source_url', '$ip_addr', '$user_agent', NOW())";

if ($conn->query($sql) === TRUE) {
    // Success - redirect to thank you page
    header("Location: https://spida.africa/thanks.html");
    exit();
} else {
    // Error - log it and redirect with error message
    error_log("Database insert failed: " . $conn->error);
    header("Location: https://spida.africa/?error=1");
    exit();
}

$conn->close();
?>

