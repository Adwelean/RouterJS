<!DOCTYPE html>
<html>
<head>
	<title>RouterJS - Test</title>
</head>
<body>
	<h1>RouterJS - Default Sample</h1>

	<nav>
		<ul>
			<li><a href="?page=home">Home</a></li>
			<li><a href="?page=presentation">Presentation</a></li>
			<li><a href="?page=articles">Articles</a></li>
		</ul>
	</nav>

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