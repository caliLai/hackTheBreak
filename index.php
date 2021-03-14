<?php include_once("index.html"); ?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8"/>
    <title>Local Scout</title>

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">


    <link rel="stylesheet" href="public/css/styles.css">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300&display=swap" rel="stylesheet">
	  <link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@500&display=swap" rel="stylesheet">
	  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
	  <script src="scripts/index.js"></script>
  </head>

<body>

  <!-- Banner -->
  <header>
    <div>

    </div>
    <div class="jumbotron jumbotron-fluid">
      <div class="headerContent">
        <div class="container">
          <h1 class="title mt-3"><strong>Local Scout</strong></h1>
          <h2 class="otherTitle mt-3">Scout, Order, & Deliver Locally!  </h2>
        </div>
        <div class="container text-center py-3 mt-3">
          <div class="search d-flex justify-content-between">
            <input type="text" class="hidden" id="market" placeholder="Scout Local Market">
            <button type="button" class="hidden" id="search-button"><i class="fas fa-search"></i></button>
          </div>
        </div>
      </div>
      </div>
    </div>
  </header>

  <section class="filtersortSearch">
    <div class="container text-center py-3 mt-3">
      <h2>Sort Market</h2>
      <select name="market" id="market-select">
         <option value='mergedaddress'>location</option>
         <option value='marketname_location_host'>name</option>
         <option value='markettype'>market type</option>
      </select>



    </div>
  </section>

  <main></main>

  <div class="filler"></div>

  <footer class = "footer">
    <div class="container text-center">
      <a href="https://forms.gle/F9WcSbmRxmrkctPm6"> Apply as Specialized Shopper </a>
      <p> © 2021-2021 Local Scout, Inc. All rights reserved </p>
    </div>
  </footer>


  <script src="https://kit.fontawesome.com/26da0e4274.js" crossorigin="anonymous"></script>
  <!-- <script src="../scripts/utilities.js" type ="text/javascript"></script> -->
</body>

</html>
