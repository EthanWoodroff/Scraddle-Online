<html>
    <body>
        <?php
            $wordsRaw = strtolower($_POST["words"]);
            if($wordsRaw == "") {
                die;
            }
            $words = explode(",", $wordsRaw);
            
            foreach($words as $word){
                if(!binaryWordSearch($word)){
                    echo("Fake Word");
                    echo "false"->process($_POST);
                    die;
                }
            }
            echo("Real Word");
            echo "true"->process($_POST);

            function binaryWordSearch($targetWord){
                $allWordsFile = fopen("english_words_all.txt", "r") or die("Error retrieving server date.");
                $lineCount = count(file("english_words_all.txt"));
                //https://www.w3resource.com/php-exercises/php-basic-exercise-16.php 15:17 23/01/2025
                $allWordsRaw = fread($allWordsFile, filesize("english_words_all.txt"));
                //$new_arr = array_map('trim', explode(',', $str));
                $allWords = array_map('trim', explode("\n", $allWordsRaw));
                fclose($allWordsFile);

                $bottomPointer = 0;
                $topPointer = $lineCount-1;
                $middlePointer = floor(($bottomPointer + $topPointer)/2);
                $checkWord = $allWords[$middlePointer];
                while($bottomPointer != $topPointer && $bottomPointer < $topPointer){
                    if($targetWord == $checkWord){
                        return true;
                    }
                    if($targetWord < $checkWord){
                        $topPointer = $middlePointer - 1;
                    }
                    else{
                        $bottomPointer = $middlePointer + 1;
                    }
                    $middlePointer = floor(($bottomPointer + $topPointer)/2);
                    $checkWord = $allWords[$middlePointer];
                    echo $targetWord . " " . $checkWord . "! " . $bottomPointer . " " . $topPointer . "<br>";
                }
                return false;
            }

        ?>
    </body>
</html>