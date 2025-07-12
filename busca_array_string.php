<?php

	function busca_array_string($p1, $p2){

		$a = -1;

		while (isset($p1[++$a]))
			if ($p1[$a] == $p2)
				return $a;

		return -1;
	}

?>