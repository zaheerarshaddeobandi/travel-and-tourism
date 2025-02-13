<?php
// track_visitor.php

// Visitor's IP address
$ip_address = $_SERVER['REMOTE_ADDR'];

// Browser information of the visitor
$user_agent = $_SERVER['HTTP_USER_AGENT'];

// Current timestamp when the visit happened
$timestamp = date('Y-m-d H:i:s');

// Page URL of the current page
$page_url = $_SERVER['REQUEST_URI'];

// Log file where the visitor data will be saved
$log_file = 'visitor_logs.txt';

// Log entry format
$log_entry = "IP: $ip_address | Browser: $user_agent | Page: $page_url | Time: $timestamp\n";

// Saving log entry in the log file
file_put_contents($log_file, $log_entry, FILE_APPEND);

// Returning the values to display on the website
echo $log_entry;
?>
