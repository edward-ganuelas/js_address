<?php 

    $file="address.json";
    function write($arrayData, $file){

        $json_string = json_encode($arrayData);
        file_put_contents($file, $json_string);
    }

    if($_GET){
        echo "get";
    }
    if($_POST){

        $obj = file_get_contents($file);

        $result = json_decode($obj,true);

      if(isset($_POST['del']) && $_POST['del'] == true){
          $keyDel = "";
           foreach($result as $key =>$contacts){
              if($contacts['id'] == $_POST['id']){
                  unset($result[$key]);
                $keyDel = $key;
                  break;
              }
           }
           unset($result[$keyDel]);
           $result = array_values($result);
          write($result, $file);
      }else{
        $last_id =  $result[count($result) -1]["id"];
        $input = array("id"=>$last_id+1, "name" => $_POST['name'], "telephone"=> $_POST['telephone']);
        array_push($result, $input);
        
        write($result, $file);
      }
      
      

       
    }

?>