<?php

/**
 * 
 */
class Arr extends Fuel\Core\Arr 
{
	/**
	 * filter array should follow the format:
	 * 
	 * array(
	 * 		array('foo', '>=', 3),
	 * 		array('bar', '=', 'baz'),
	 * 		array('id', 'IN', array(1,2,3)),
	 * )
	 * 
	 * OR 
	 * 
	 * Arr::filter($array, 'key', 'value') 
	 * 
	 * to perform a simple equals
	 * 
	 * all filters are evaluated as "AND" statments. "OR" is not possible
	 * 
	 */
	public static function filter($array, $filter, $value = null)
	{
		$final = array();
		
		if( ! is_array($filter))
		{
			$filter = array(array($filter, '=', $value));
		}
		
		foreach ($array as $row)
		{
			foreach ($filter as $test)
			{
				switch ($test[1])
				{
					case "=" 	: 	$pass = $row[$test[0]] == $test[2]; break;
					case "!=" 	:	$pass = $row[$test[0]] != $test[2]; break;
					case ">=" 	:	$pass = $row[$test[0]] >= $test[2]; break;
					case "<=" 	:	$pass = $row[$test[0]] <= $test[2]; break;
					case ">" 	:	$pass = $row[$test[0]] >  $test[2]; break;
					case "<" 	:	$pass = $row[$test[0]] <  $test[2]; break;
					case "IN" 	:	$pass = array_search($row[$test[0]], $test[2]) !== FALSE; break;
					default 	: 	$pass =  FALSE; break;
				}
				
				if( ! $pass) continue 2;
				
			} unset($test);
				
			$final[] = $row;
		} unset($row);
		
		return $final;
	}
	
}
