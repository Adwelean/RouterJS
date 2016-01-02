<!DOCTYPE html>
<html>
<head>
	<title>RouterJS - Test</title>
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	<meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.1.7/semantic.min.css">
	<link rel="stylesheet" href="css/app.css">
</head>
<body id="example" class="ui container">

	<header class="ui vertical segment">
		<div class="ui grid">
			<div class="three column row">
				<div class="column"></div>
				<div class="column">
					<h1 class="ui center aligned dividing header">RouterJS - Default Sample</h1>
				</div>
				<div class="column"></div>
			</div>		
		</div>

		<nav class="ui fluid three item stackable tabs menu">
			<a href="?page=home" class="item">Home</a>
			<a href="?page=presentation" class="item">Presentation</a>
			<a href="?page=articles" class="item">Articles</a>
		</nav>
	</header>

	<article class="main ui container">
		<section>
			<?php
				if(isset($_GET['page']))
				{
					switch($_GET['page'])
					{
						case "home":
							include "home.php";
							break;

						case "presentation":
							include "presentation.php";
							break;

						case "articles":
							include "articles.php";
							break;

						default:
							include "home.php";
							break;
					}
				}
				else
					include "home.php";
			?>
		</section>

		<section class="html ui top attached segment">
			<h3 class="top ui attached label">Javascript console log :</h3>
			<pre id="console-js" class="code"></pre>
		</section>
	</article>

	<script src="js/app.js"></script>
	<script src="../src/router.js"></script>
	<script src="js/main.js"></script>
	<script src="js/editor.js"></script>

	<script>
		var app = new App(true);
		app.init();
	</script>
</body>
</html>