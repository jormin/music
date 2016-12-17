<?php
    include_once("./lib/init.php");
    session_destroy();
    redirect("/login.php");