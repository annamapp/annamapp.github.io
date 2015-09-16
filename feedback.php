<?php
error_reporting ( E_ERROR | E_PARSE );
if (isset ( $_POST ["submit"] )) {
	$name = $_POST ['subject'];
	$email = $_POST ['email'];
	$message = $_POST ['message'];
	$from = 'Annam Feedback';
	$to = 'contact@hottif.in';
	$subject = $_POST ['subject'];
	
	$body = "E-Mail: $email\n Message:\n $message";
	
	// Check if name has been entered
	if (! $_POST ['subject']) {
		$errName = 'Please enter your Subject';
	}
	
	// Check if email has been entered and is valid
	if (! $_POST ['email'] || ! filter_var ( $_POST ['email'], FILTER_VALIDATE_EMAIL )) {
		$errEmail = 'Please enter a valid email address';
	}
	
	// Check if message has been entered
	if (! $_POST ['message']) {
		$errMessage = 'Please enter your message';
	}
	// Check if simple anti-bot test is correct
	
	// If there are no errors, send the email
	if (! $errName && ! $errEmail && ! $errMessage) {
		if (mail ( $to, $subject, $body, $from )) {
			$result = '<div class="alert alert-success">Thank You for your feedback</div>';
		} else {
			$result = '<div class="alert alert-danger">Sorry there was an error sending your message. Please try again later</div>';
		}
	}
}
?>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<meta name="viewport" content="width=device-width, initial-scale=1" />
<link
	href="https://maxcdn.bootstrapcdn.com/bootswatch/3.3.5/paper/bootstrap.min.css"
	rel="stylesheet"
	integrity="sha256-hMIwZV8FylgKjXnmRI2YY0HLnozYr7Cuo1JvRtzmPWs= sha512-k+wW4K+gHODPy/0gaAMUNmCItIunOZ+PeLW7iZwkDZH/wMaTrSJTt7zK6TGy6p+rnDBghAxdvu1LX2Ohg0ypDw=="
	crossorigin="anonymous">
<link href='https://fonts.googleapis.com/css?family=Roboto'
	rel='stylesheet' type='text/css'>
<link rel="stylesheet" href="./css/liquid-slider.css">
<link rel="stylesheet"
	href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">
<script
	src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
<script
	src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
<style type="text/css">
.footer {
	position: relative;
	bottom: 0;
	width: 100%;
	height: 60px;
	background-color: #f5f5f5;
}

.footer .container-fluid p {
	margin: 20px 0;
}
</style>
<title>Annam</title>
</head>
<body>
	<nav class="navbar navbar-inverse navbar-static-top">
		<div class="container-fluid">
			<div class="navbar-header">
				<button type="button" class="navbar-toggle collapsed"
					data-toggle="collapse" data-target="#bs-example-navbar-collapse-2">
					<span class="sr-only">Toggle navigation</span> <span
						class="icon-bar"></span> <span class="icon-bar"></span> <span
						class="icon-bar"></span>
				</button>
				<a class="navbar-brand" rel="home" href="index.html" title="Annam">
					<img style="max-width: 100px; max-height: 40px; margin-top: -7px;"
					src="../liquidslider-master/logo-website.png">
				</a>
			</div>

			<div class="collapse navbar-collapse"
				id="bs-example-navbar-collapse-2">
				<ul class="nav navbar-nav">
					<li><a href="index.html">Home</a></li>
					<li><a href="annam.html">Annam</a></li>
					<li><a href="annam-business.html">Annam Business</a></li>
					<li class="active"><a href="feedback.php">Feedback</a>
				
				</ul>
				<ul class="nav navbar-nav navbar-right">
					<li><a href="#"><span class="fa fa-phone-square fa-lg"></span> +91
							9004452418</a></li>
					<li><a href="https://www.facebook.com/hotiffin"><span
							class="fa fa-facebook-square fa-lg"></span></a></li>
					<li><a href="https://twitter.com/hotiffin"><span
							class="fa fa-twitter-square fa-lg"></span></a></li>
				</ul>
			</div>
		</div>
	</nav>
	<div class="container">
		<div class="col-md-6" style="margin-top: 100px">
			<form class="form-horizontal" role="form" method="post"
				action="feedback.php">
				<div class="form-group">
					<div class="col-sm-10">
						<input type="text" class="form-control" id="subject"
							name="subject" placeholder="Subject">
            <?php echo "<p class='text-danger'>$errName</p>";?>
        </div>
				</div>
				<div class="form-group">
					<div class="col-sm-10">
						<input type="email" class="form-control" id="email" name="email"
							placeholder="example@domain.com">
            <?php echo "<p class='text-danger'>$errEmail</p>";?>
        </div>
				</div>
				<div class="form-group">
					<div class="col-sm-10">
						<textarea class="form-control" rows="4" name="message"
							placeholder="Message"></textarea>
            <?php echo "<p class='text-danger'>$errMessage</p>";?>
        </div>
				</div>

				<div class="form-group">
					<div class="col-sm-10">
						<input id="submit" name="submit" type="submit" value="Send"
							class="btn btn-primary">
					</div>
				</div>
				<div class="form-group">
					<div class="col-sm-10 col-sm-offset-2">
            <?php echo $result; ?>    
        </div>
				</div>
			</form>
		</div>
		<div class="col-md-6" style="margin-top: 20px">
			<iframe class="map" width="500" height="400" frameborder="0"
				scrolling="no" marginheight="0" marginwidth="0"
				src="https://maps.google.com/maps?q=19.179129163116,72.83624477684498&hl=es;z=14&amp;output=embed"></iframe>
			<br />
			<h4>Address:</h4>
			<br>
			<p>22(U), Ground floor, Evershine Mall, Link Road, Mindspace, Malad
				West, Mumbai, Maharashtra 400064, India.</p>
			<br>
			<p>
				<strong>Contact Number: +91 9004452418</strong>
			</p>

		</div>
	</div>
	<br>
	<footer class="footer">

		<div class="container-fluid">
			<p class="text-center">@2015 hotiff.in - All Rights Reserved.</p>
		</div>
	</footer>
</body>
</html>

