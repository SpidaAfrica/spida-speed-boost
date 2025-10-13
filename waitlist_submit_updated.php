<?php
declare(strict_types=1);
if ($_SERVER['REQUEST_METHOD'] !== 'POST') { http_response_code(405); exit('Method Not Allowed'); }

$required = ['list_name','full_name','email'];
foreach ($required as $f) if (empty($_POST[$f])) { http_response_code(422); exit('Missing field'); }

if (!empty($_POST['company'])) { http_response_code(204); exit; } // honeypot

$list         = substr(trim($_POST['list_name']), 0, 64);
$name         = substr(trim($_POST['full_name']), 0, 160);
$email        = filter_var(trim($_POST['email']), FILTER_VALIDATE_EMAIL);
$phone        = isset($_POST['phone']) ? substr(trim($_POST['phone']), 0, 40) : null;
$company_name = isset($_POST['company_name']) ? substr(trim($_POST['company_name']), 0, 160) : null;
$company_type = isset($_POST['company_type']) ? substr(trim($_POST['company_type']), 0, 64) : null;
$subject      = isset($_POST['subject']) ? substr(trim($_POST['subject']), 0, 255) : null;
$message      = isset($_POST['message']) ? substr(trim($_POST['message']), 0, 2000) : null;

if (!$email) { http_response_code(422); exit('Invalid email'); }

$dsn   = 'mysql:host=localhost;dbname=spidvmg_waitlist;charset=utf8mb4';
$user  = 'spidvvmg_wluser';
$pass  = '@SPIDA12345!!';

try {
  $pdo = new PDO($dsn, $user, $pass, [
    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
  ]);

  $sql = 'INSERT INTO waitlist_signups
    (list_name, full_name, email, phone, company_name, company_type, subject, message, source_url, ip_addr, user_agent)
    VALUES (:list_name, :full_name, :email, :phone, :company_name, :company_type, :subject, :message, :source_url, :ip_addr, :user_agent)
    ON DUPLICATE KEY UPDATE
      full_name=VALUES(full_name),
      phone=VALUES(phone),
      company_name=VALUES(company_name),
      company_type=VALUES(company_type),
      subject=VALUES(subject),
      message=VALUES(message),
      source_url=VALUES(source_url),
      user_agent=VALUES(user_agent)';
  $stmt = $pdo->prepare($sql);
  $stmt->execute([
    ':list_name'    => $list,
    ':full_name'    => $name,
    ':email'        => strtolower($email),
    ':phone'        => $phone,
    ':company_name' => $company_name,
    ':company_type' => $company_type,
    ':subject'      => $subject,
    ':message'      => $message,
    ':source_url'   => isset($_SERVER['HTTP_REFERER']) ? substr($_SERVER['HTTP_REFERER'],0,255) : null,
    ':ip_addr'      => inet_pton($_SERVER['REMOTE_ADDR'] ?? '') ?: null,
    ':user_agent'   => substr($_SERVER['HTTP_USER_AGENT'] ?? '',0,255),
  ]);

header('Location: /thanks.html?list=' . urlencode($list));
exit;
} catch (Throwable $e) {
  http_response_code(500);
  exit('Please try again later.');
}

