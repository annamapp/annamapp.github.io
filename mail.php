<?php
error_reporting(E_ERROR | E_PARSE);
    if (isset($_POST["submit"])) {
        $name = $_POST['subject'];
        $email = $_POST['email'];
        $message = $_POST['message'];
        $from = 'Annam Feedback'; 
        $to = 'contact@hottif.in'; 
        $subject = $_POST['subject'];
        
        $body = "E-Mail: $email\n Message:\n $message";
 
        // Check if name has been entered
        if (!$_POST['subject']) {
            $errName = 'Please enter your Subject';
        }
        
        // Check if email has been entered and is valid
        if (!$_POST['email'] || !filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
            $errEmail = 'Please enter a valid email address';
        }
        
        //Check if message has been entered
        if (!$_POST['message']) {
            $errMessage = 'Please enter your message';
        }
        //Check if simple anti-bot test is correct
 
// If there are no errors, send the email
if (!$errName && !$errEmail && !$errMessage) {
    if (mail ($to, $subject, $body, $from)) {
        $result='<div class="alert alert-success">Thank You for your feedback</div>';
    } else {
        $result='<div class="alert alert-danger">Sorry there was an error sending your message. Please try again later</div>';
    }
}
    }
?>