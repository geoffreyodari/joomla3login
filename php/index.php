<?php

define('_JEXEC', 1);
define('JPATH_BASE', '../../sunset/');//relative path to the joomla site
require_once JPATH_BASE . 'includes/defines.php';
require_once JPATH_BASE . 'includes/framework.php';

// Create the Application
$app = JFactory::getApplication('site');

jimport('joomla.plugin.helper');

$user_login =!empty($_POST['username'])?$_POST['username']:'';
$user_password=!empty($_POST['password'])?$_POST['password']:'';


$result = $app->login([
    'username' => $user_login,
    'password' => $user_password,
]);
 
$credentials = ($result==1)? JFactory::getUser(): 0;


(gettype($credentials)=="object")? success_login($credentials): fail_login($credentials);

function success_login($user){
	echo '{ "success": true,"message": "User logged in successfully","data": '.json_encode($user).'}';
}

function fail_login($user){
	echo '{ "success": false,"message": "Login failed","data": "Wrong username or password"}';
}

?>