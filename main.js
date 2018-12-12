$(document).ready(function(){

	$(".add").on('click', function(){
		var a = Number($('.num1').val())
		var b = Number($('.num2').val())
		var c = a + b
		$('.answer').val(c)
	})

	$(".subtract").on('click', function(){
		var a = Number($('.num1').val())
		var b = Number($('.num2').val())
		var c = a - b
		$('.answer').val(c)
	})
	
	$(".multiply").on('click', function(){
		var a = Number($('.num1').val())
		var b = Number($('.num2').val())
		var c = a * b
		$('.answer').val(c)
	})
	
	$(".divide").on('click', function(){
		var a = Number($('.num1').val())
		var b = Number($('.num2').val())
		var c = a / b
		$('.answer').val(c)
	})
	
})