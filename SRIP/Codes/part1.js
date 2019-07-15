var wavesurfer;

// Init & load
document.addEventListener('DOMContentLoaded', function() {
    var options = {
        container: '#waveform',
        waveColor: 'violet',
        progressColor: 'purple',
        loaderColor: 'purple',
        cursorColor: 'navy',
        plugins: [WaveSurfer.cursor.create()]
    };

    // Init wavesurfer
    wavesurfer = WaveSurfer.create(options);

    $( "#play" ).click(function(){
		//wavesurfer.backend.ac.resume();
		
		wavesurfer.playPause();
		
	});

	$("#mySelect").on('change', function() {
		//alert( this.value );
		var sel=this.value;
		if(sel==="Hindi"){
			document.getElementById("utterance").innerHTML = " विदेश् मंत्रालय् के प्रवक्ता ने फिर् कहा" ;
			document.getElementById("translit").innerHTML ="videsh man'traalay ke pravaktaa ne phir kahaa " ;
			document.getElementById("syll").innerHTML = "vi desh man' traa lay ke pra vak taa ne phir ka haa" ;
			document.getElementById("ph").innerHTML = " v i d e sh m a n' t r aa l a y k e p r a v a k t aa n e ph i r k a h aa"  ;
			wavesurfer.load('hindi.mp3');
			$("#final2").empty();
			$("#final3").empty();


			var table = document.getElementById("final1");
//row1 heading part
			var r0 = table.insertRow(0);
  			var r0c1 = r0.insertCell(0);
  			var r0c2 = r0.insertCell(1);
  			var r0c3 = r0.insertCell(2);
  			
  			r0.className="first";

  			r0c1.innerHTML = '<strong>Sym</strong>';
  			r0c2.innerHTML = '<strong>START</strong>';
  			r0c3.innerHTML = '<strong>STOPs</strong>';
  			



  			var r1 = table.insertRow(1);
  			var r1c1 = r1.insertCell(0);
  			var r1c2 = r1.insertCell(1);
  			var r1c3 = r1.insertCell(2);
  			
  			r1c1.innerHTML = '<button type="button" class="btn btn-outline-dark btn-sm m-1" id="v1" ">v</button>';
  			r1c2.innerHTML = '0.055'
  			r1c3.innerHTML='0.1'
//row2 start numbering
  			var r2 = table.insertRow(2);
  			var r2c1 = r2.insertCell(0);
  			var r2c2 = r2.insertCell(1);
  			var r2c3 = r2.insertCell(2);
  			
  			r2c1.innerHTML = '<button type="button" class="btn btn-outline-dark btn-sm m-1" id="i1" ">i</button>';
  			r2c2.innerHTML = '0.11'
  			r2c3.innerHTML='0.18'
//row 3  			
  			var r3 = table.insertRow(3);
  			var r3c1 = r3.insertCell(0);
  			var r3c2 = r3.insertCell(1);
  			var r3c3 = r3.insertCell(2);
  	
  			r3c1.innerHTML = '<button type="button"   class="btn btn-outline-dark btn-sm m-1" id="d" ">d</button>'
  			r3c2.innerHTML = '0.18'
  			r3c3.innerHTML='0.293'

  			var r4 = table.insertRow(4);
  			var r4c1 = r4.insertCell(0);
  			var r4c2 = r4.insertCell(1);
  			var r4c3 = r4.insertCell(2);
  			
  			r4c1.innerHTML = '<button type="button"  class="btn btn-outline-dark btn-sm m-1" id="e1" ">e</button>'
  			r4c2.innerHTML = '0.295'
  			r4c3.innerHTML='0.405'
//row4  			
  			var r5 = table.insertRow(5);
  			var r5c1 = r5.insertCell(0);
  			var r5c2 = r5.insertCell(1);
  			var r5c3 = r5.insertCell(2);
  			
  			r5c1.innerHTML = '<button type="button"  class="btn btn-outline-dark btn-sm m-1" id="sh" ">sh</button>'
  			r5c2.innerHTML = '0.413'
  			r5c3.innerHTML='0.555'
//row 5

  			var r6 = table.insertRow(6 );
  			var r6c1 = r6.insertCell(0);
  			var r6c2 = r6.insertCell(1);
  			var r6c3 = r6.insertCell(2);
  			
  			r6c1.innerHTML = '<button type="button"  class="btn btn-outline-dark btn-sm m-1" id="m" ">m</button>'
  			r6c2.innerHTML = '0.555'
  			r6c3.innerHTML='0.623'
//row 6  			
  			var r7 = table.insertRow(7);
  			var r7c1 = r7.insertCell(0);
  			var r7c2 = r7.insertCell(1);
  			var r7c3 = r7.insertCell(2);
  			
  			r7c1.innerHTML = '<button type="button"   class="btn btn-outline-dark btn-sm m-1" id="a1" ">a</button>'
  			r7c2.innerHTML = '0.627'
  			r7c3.innerHTML='0.666'
//row 7
  			var r8 = table.insertRow(8 );
  			var r8c1 = r8.insertCell(0);
  			var r8c2 = r8.insertCell(1);
  			var r8c3 = r8.insertCell(2);

  			r8c1.innerHTML = '<button type="button"  class="btn btn-outline-dark btn-sm m-1" id="n1" ">n</button>'
  			r8c2.innerHTML = '0.671'
  			r8c3.innerHTML='0.745'
//row 8
  			var r9 = table.insertRow(9 );
  			var r9c1 = r9.insertCell(0);
  			var r9c2 = r9.insertCell(1);
  			var r9c3 = r9.insertCell(2);
  			
  			r9c1.innerHTML = '<button type="button"   class="btn btn-outline-dark btn-sm m-1" id="t1" ">t</button>'
  			r9c2.innerHTML = '0.745'
  			r9c3.innerHTML='0.784'
//row 9  			
  			var r10 = table.insertRow(10 );
  			var r10c1 = r10.insertCell(0);
  			var r10c2 = r10.insertCell(1);
  			var r10c3 = r10.insertCell(2);
  			
  			r10c1.innerHTML = '<button type="button"  class="btn btn-outline-dark btn-sm m-1" id="r1" ">r</button>'
  			r10c2.innerHTML = '0.785'
  			r10c3.innerHTML='0.830'
//row 10
  			var r11 = table.insertRow(11 );
  			var r11c1 = r11.insertCell(0);
  			var r11c2 = r11.insertCell(1);
  			var r11c3 = r11.insertCell(2);
  			
  			r11c1.innerHTML = '<button type="button"  class="btn btn-outline-dark btn-sm m-1" id="aa1" ">aa</button>'
  			r11c2.innerHTML = '0.830'
  			r11c3.innerHTML='0.945'
//row 11
  			var r12 = table.insertRow(12);
  			var r12c1 = r12.insertCell(0);
  			var r12c2 = r12.insertCell(1);
  			var r12c3 = r12.insertCell(2);
  		
  			r12c1.innerHTML = '<button type="button"  class="btn btn-outline-dark btn-sm m-1" id="l" ">l</button>'
  			r12c2.innerHTML = '0.945'
  			r12c3.innerHTML='0.994'
 //row 12
  			var r13 = table.insertRow(13 );
  			var r13c1 = r13.insertCell(0);
  			var r13c2 = r13.insertCell(1);
  			var r13c3 = r13.insertCell(2);
  			
  			r13c1.innerHTML = '<button type="button"  class="btn btn-outline-dark btn-sm m-1" id="a2" ">a</button>'
  			r13c2.innerHTML = '1.012'
  			r13c3.innerHTML='1.052'
//row 13
  			var r14 = table.insertRow(14 );
  			var r14c1 = r14.insertCell(0);
  			var r14c2 = r14.insertCell(1);
  			var r14c3 = r14.insertCell(2);
  			
  			r14c1.innerHTML = '<button type="button"   class="btn btn-outline-dark btn-sm m-1" id="y" ">y</button>'
  			r14c2.innerHTML = '1.059'
  			r14c3.innerHTML='1.170'
//row 14
  			var r15 = table.insertRow(15 );
  			var r15c1 = r15.insertCell(0);
  			var r15c2 = r15.insertCell(1);
  			var r15c3 = r15.insertCell(2);
  			
  			r15c1.innerHTML = '<button type="button"  class="btn btn-outline-dark btn-sm m-1" id="k1" ">k</button>'
  			r15c2.innerHTML = '1.167'
  			r15c3.innerHTML='1.240'
//row 15
  			var r16 = table.insertRow(16 );
  			var r16c1 = r16.insertCell(0);
  			var r16c2 = r16.insertCell(1);
  			var r16c3 = r16.insertCell(2);
  			
  			r16c1.innerHTML = '<button type="button"  class="btn btn-outline-dark btn-sm m-1" id="e2" ">e</button>'
  			r16c2.innerHTML = '1.256'
  			r16c3.innerHTML='1.350'
 //row 16
  			var r17 = table.insertRow(17 );
  			var r17c1 = r17.insertCell(0);
  			var r17c2 = r17.insertCell(1);
  			var r17c3 = r17.insertCell(2);
  			
  			r17c1.innerHTML = '<button type="button"   class="btn btn-outline-dark btn-sm m-1" id="p" ">p</button>'
  			r17c2.innerHTML = '1.351'
  			r17c3.innerHTML='1.405'
//row 17
  			var r18 = table.insertRow(18 );
  			var r18c1 = r18.insertCell(0);
  			var r18c2 = r18.insertCell(1);
  			var r18c3 = r18.insertCell(2);
  			
  			r18c1.innerHTML = '<button type="button"   class="btn btn-outline-dark btn-sm m-1" id="r2" ">r</button>'
  			r18c2.innerHTML = '1.410'
  			r18c3.innerHTML='1.443'
//row 18
  			var r19 = table.insertRow(19 );
  			var r19c1 = r19.insertCell(0);
  			var r19c2 = r19.insertCell(1);
  			var r19c3 = r19.insertCell(2);
  			
  			r19c1.innerHTML = '<button type="button"  class="btn btn-outline-dark btn-sm m-1" id="a3" ">a</button>'
  			r19c2.innerHTML = '1.450'
  			r19c3.innerHTML='1.481'
//row 19
  			var r20 = table.insertRow(20 );
  			var r20c1 = r20.insertCell(0);
  			var r20c2 = r20.insertCell(1);
  			var r20c3 = r20.insertCell(2);
  		
  			r20c1.innerHTML = '<button type="button"   class="btn btn-outline-dark btn-sm m-1" id="v2" ">v</button>'
  			r20c2.innerHTML = '1.488'
  			r20c3.innerHTML='1.558'
//row 20
  			var r21 = table.insertRow(21 );
  			var r21c1 = r21.insertCell(0);
  			var r21c2 = r21.insertCell(1);
  			var r21c3 = r21.insertCell(2);
  			
  			r21c1.innerHTML = '<button type="button"  class="btn btn-outline-dark btn-sm m-1" id="a4" ">a</button>'
  			r21c2.innerHTML = '1.568'
  			r21c3.innerHTML='1.768'
//row 21
  			var r22 = table.insertRow(22 );
  			var r22c1 = r22.insertCell(0);
  			var r22c2 = r22.insertCell(1);
  			var r22c3 = r22.insertCell(2);
  			
  			r22c1.innerHTML = '<button type="button"  class="btn btn-outline-dark btn-sm m-1" id="k2" ">k</button>'
  			r22c2.innerHTML = '1.768'
  			r22c3.innerHTML='1.850'
//row 22
  			var r23 = table.insertRow(23 );
  			var r23c1 = r23.insertCell(0);
  			var r23c2 = r23.insertCell(1);
  			var r23c3 = r23.insertCell(2);
  			var r23c4 = r23.insertCell(3);
  			r23c1.innerHTML = '<button type="button"  class="btn btn-outline-dark btn-sm m-1" id="t2" ">t</button>'
  			r23c2.innerHTML = '1.850'
  			r23c3.innerHTML='1.870'
//row 23
  			var r24 = table.insertRow(24 );
  			var r24c1 = r24.insertCell(0);
  			var r24c2 = r24.insertCell(1);
  			var r24c3 = r24.insertCell(2);
  			
  			r24c1.innerHTML = '<button type="button"  class="btn btn-outline-dark btn-sm m-1" id="aa2" ">aa</button>'
  			r24c2.innerHTML = '1.870'
  			r24c3.innerHTML='1.959'
//row 24
  			var r25 = table.insertRow(25 );
  			var r25c1 = r25.insertCell(0);
  			var r25c2 = r25.insertCell(1);
  			var r25c3 = r25.insertCell(2);
  			
  			r25c1.innerHTML = '<button type="button"  class="btn btn-outline-dark btn-sm m-1" id="n2" ">n</button>'
  			r25c2.innerHTML = '1.960'
  			r25c3.innerHTML='2.056'
//row 25
  			var r26 = table.insertRow(26 );
  			var r26c1 = r26.insertCell(0);
  			var r26c2 = r26.insertCell(1);
  			var r26c3 = r26.insertCell(2);
  			
  			r26c1.innerHTML = '<button type="button"  class="btn btn-outline-dark btn-sm m-1" id="e3" ">e</button>'
  			r26c2.innerHTML = '2.095'
  			r26c3.innerHTML='2.236'
//row 26  			
  			var r27 = table.insertRow(27 );
  			var r27c1 = r27.insertCell(0);
  			var r27c2 = r27.insertCell(1);
  			var r27c3 = r27.insertCell(2);
  			
  			r27c1.innerHTML = '<button type="button"  class="btn btn-outline-dark btn-sm m-1" id="ph" ">ph</button>'
  			r27c2.innerHTML = '2.237'
  			r27c3.innerHTML='2.335'
//row 27  			
  			var r28 = table.insertRow(28 );
  			var r28c1 = r28.insertCell(0);
  			var r28c2 = r28.insertCell(1);
  			var r28c3 = r28.insertCell(2);
  			
  			r28c1.innerHTML = '<button type="button"   class="btn btn-outline-dark btn-sm m-1" id="i2" ">i</button>'
  			r28c2.innerHTML = '2.337'
  			r28c3.innerHTML='2.391'
//row 28  			
  			var r29 = table.insertRow(29 );
  			var r29c1 = r29.insertCell(0);
  			var r29c2 = r29.insertCell(1);
  			var r29c3 = r29.insertCell(2);
  			
  			r29c1.innerHTML = '<button type="button"  class="btn btn-outline-dark btn-sm m-1" id="r3" ">r</button>'
  			r29c2.innerHTML = '2.405'
  			r29c3.innerHTML='2.485'
//row 29  			
  			var r30 = table.insertRow(30 );
  			var r30c1 = r30.insertCell(0);
  			var r30c2 = r30.insertCell(1);
  			var r30c3 = r30.insertCell(2);
  			
  			r30c1.innerHTML = '<button type="button"  class="btn btn-outline-dark btn-sm m-1" id="k3" ">k</button>'
  			r30c2.innerHTML = '2.511'
  			r30c3.innerHTML='2.549'
//row 30  			
  			var r31 = table.insertRow(31 );
  			var r31c1 = r31.insertCell(0);
  			var r31c2 = r31.insertCell(1);
  			var r31c3 = r31.insertCell(2);
  			
  			r31c1.innerHTML = '<button type="button"  class="btn btn-outline-dark btn-sm m-1" id="a5" ">a</button>'
  			r31c2.innerHTML = '2.553'
  			r31c3.innerHTML='2.660'
//row 31
  			var r32 = table.insertRow(32 );
  			var r32c1 = r32.insertCell(0);
  			var r32c2 = r32.insertCell(1);
  			var r32c3 = r32.insertCell(2);
  			
  			r32c1.innerHTML = '<button type="button"  class="btn btn-outline-dark btn-sm m-1" id="h" ">h</button>'
  			r32c2.innerHTML = '2.663'
  			r32c3.innerHTML='2.743'
//row 32  			
  			var r33 = table.insertRow(33  );
  			var r33c1 = r33.insertCell(0);
  			var r33c2 = r33.insertCell(1);
  			var r33c3 = r33.insertCell(2);
  			
  			r33c1.innerHTML = '<button type="button"  class="btn btn-outline-dark btn-sm m-1" id="aa3" ">aa</button>'
  			r33c2.innerHTML = '2.750'
  			r33c3.innerHTML='2.932'


  			// adding region for each phenome button in the row

			$( "#v1" ).click(function(){
				wavesurfer.clearRegions();
				wavesurfer.addRegion({id:'one',start:0.055,end:0.1,color: randomColor(0.1)});
			});
			$( "#i1" ).click(function(){
				wavesurfer.clearRegions();
				wavesurfer.addRegion({id:'two',start:0.11,end:0.18,color: randomColor(0.1)});
			});

			$( "#d" ).click(function(){
				wavesurfer.clearRegions();
				wavesurfer.addRegion({id:'two',start:0.18,end:0.293,color: randomColor(0.1)});
			});

			$( "#e1" ).click(function(){
				wavesurfer.clearRegions();
				wavesurfer.addRegion({id:'two',start:0.295,end:0.405,color: randomColor(0.1)});
			});

			$( "#sh" ).click(function(){
				wavesurfer.clearRegions();
				wavesurfer.addRegion({id:'two',start:0.413,end:0.555,color: randomColor(0.1)});
			});

			$( "#m" ).click(function(){
				wavesurfer.clearRegions();
				wavesurfer.addRegion({id:'two',start:0.555,end:0.623,color: randomColor(0.1)});
			});

			$( "#a1" ).click(function(){
				wavesurfer.clearRegions();
				wavesurfer.addRegion({id:'two',start:0.627,end:0.666,color: randomColor(0.1)});
			});

			$( "#n1" ).click(function(){
				wavesurfer.clearRegions();
				wavesurfer.addRegion({id:'two',start:0.671,end:0.745,color: randomColor(0.1)});
			});

			$( "#t1" ).click(function(){
				wavesurfer.clearRegions();
				wavesurfer.addRegion({id:'two',start:0.745,end:0.784,color: randomColor(0.1)});
			});

			$( "#r1" ).click(function(){
				wavesurfer.clearRegions();
				wavesurfer.addRegion({id:'two',start:0.785,end:0.830,color: randomColor(0.1)});
			});

			$( "#aa1" ).click(function(){
				wavesurfer.clearRegions();
				wavesurfer.addRegion({id:'two',start:0.830,end:0.945,color: randomColor(0.1)});
			});

			$( "#l" ).click(function(){
				wavesurfer.clearRegions();
				wavesurfer.addRegion({id:'two',start:0.945,end:0.994 ,color: randomColor(0.1)});
			});


			$( "#a" ).click(function(){
				wavesurfer.clearRegions();
				wavesurfer.addRegion({id:'two',start:1.012,end:1.052 ,color: randomColor(0.1)});
			});

			$( "#y" ).click(function(){
				wavesurfer.clearRegions();
				wavesurfer.addRegion({id:'two',start:1.059,end:1.170 ,color: randomColor(0.1)});
			});

			$( "#k1" ).click(function(){
				wavesurfer.clearRegions();
				wavesurfer.addRegion({id:'two',start:1.167,end:1.240 ,color: randomColor(0.1)});
			});

			$( "#e2" ).click(function(){
				wavesurfer.clearRegions();
				wavesurfer.addRegion({id:'two',start:1.256,end:1.350 ,color: randomColor(0.1)});
			});

			$( "#p" ).click(function(){
				wavesurfer.clearRegions();
				wavesurfer.addRegion({id:'two',start:1.351,end:1.405 ,color: randomColor(0.1)});
			});

			$( "#r2" ).click(function(){
				wavesurfer.clearRegions();
				wavesurfer.addRegion({id:'two',start:1.410,end:1.443 ,color: randomColor(0.1)});
			});

			$( "#a3" ).click(function(){
				wavesurfer.clearRegions();
				wavesurfer.addRegion({id:'two',start:1.450,end:1.481 ,color: randomColor(0.1)});
			});

			$( "#v2" ).click(function(){
				wavesurfer.clearRegions();
				wavesurfer.addRegion({id:'two',start:1.488,end:1.558 ,color: randomColor(0.1)});
			});

			$( "#a4" ).click(function(){
				wavesurfer.clearRegions();
				wavesurfer.addRegion({id:'two',start:1.568,end:1.768   ,color: randomColor(0.1)});
			});

			$( "#k2" ).click(function(){
				wavesurfer.clearRegions();
				wavesurfer.addRegion({id:'two',start:1.768,end:1.850 ,color: randomColor(0.1)});
			});

			$( "#t2" ).click(function(){
				wavesurfer.clearRegions();
				wavesurfer.addRegion({id:'two',start:1.850,end:1.870 ,color: randomColor(0.1)});
			});

			$( "#aa2" ).click(function(){
				wavesurfer.clearRegions();
				wavesurfer.addRegion({id:'two',start:1.870,end:1.959 ,color: randomColor(0.1)});
			});

			$( "#n2" ).click(function(){
				wavesurfer.clearRegions();
				wavesurfer.addRegion({id:'two',start:1.960,end:2.056 ,color: randomColor(0.1)});
			});

			$( "#e3" ).click(function(){
				wavesurfer.clearRegions();
				wavesurfer.addRegion({id:'two',start:2.095,end:2.236 ,color: randomColor(0.1)});
			});

			$( "#ph" ).click(function(){
				wavesurfer.clearRegions();
				wavesurfer.addRegion({id:'two',start:2.236,end:2.335 ,color: randomColor(0.1)});
			});

			$( "#i2" ).click(function(){
				wavesurfer.clearRegions();
				wavesurfer.addRegion({id:'two',start:2.337,end:2.391 ,color: randomColor(0.1)});
			});

			$( "#r3" ).click(function(){
				wavesurfer.clearRegions();
				wavesurfer.addRegion({id:'two',start:2.405,end:2.485 ,color: randomColor(0.1)});
			});

			$( "#k3" ).click(function(){
				wavesurfer.clearRegions();
				wavesurfer.addRegion({id:'two',start:2.511,end:2.549 ,color: randomColor(0.1)});
			});

			$( "#a5" ).click(function(){
				wavesurfer.clearRegions();
				wavesurfer.addRegion({id:'two',start:2.553,end:2.660 ,color: randomColor(0.1)});
			});

			$( "#h" ).click(function(){
				wavesurfer.clearRegions();
				wavesurfer.addRegion({id:'two',start:2.663,end:2.743 ,color: randomColor(0.1)});
			});

			$( "#aa3" ).click(function(){
				wavesurfer.clearRegions();
				wavesurfer.addRegion({id:'two',start:2.750,end:2.932 ,color: randomColor(0.1)});
			});
			
		}

		if(sel==="Telugu"){
			document.getElementById("utterance").innerHTML = " ఈరోజు వార్తల్లోని ముఖ్యామ్శాలు" ;
			document.getElementById("translit").innerHTML ="iirooju vaartallooni mukhyaamshaalu " ;
			document.getElementById("syll").innerHTML = " ii roo ju vaar tal loo ni mukh yaam shaa lu" ;
			document.getElementById("ph").innerHTML = " ii r oo j u v aa r t a l l oo n i m u kh y aa m sh aa l u"  ;
			wavesurfer.load('telugu.mp3');
			$("#final2").empty();
			$("#final3").empty();
      //clears wave region
      //wavesurfer.clearRegions();
      
      var table = document.getElementById("final2");

      var r0 = table.insertRow(0);
        var r0c1 = r0.insertCell(0);
        var r0c2 = r0.insertCell(1);
        var r0c3 = r0.insertCell(2);
        r0.className="first";

        r0c1.innerHTML = '<strong>Sym</strong>';
        r0c2.innerHTML = '<strong>STARTS</strong>';
        r0c3.innerHTML = '<strong>STOPS</strong>';



        var r1 = table.insertRow(1);
        var r1c1 = r1.insertCell(0);
        var r1c2 = r1.insertCell(1);
        var r1c3 = r1.insertCell(2);
        r1c1.innerHTML = '<button type="button" class="btn btn-outline-dark btn-sm m-1" id="ii" ">ii</button>';
        r1c2.innerHTML = '0.109'
        r1c3.innerHTML='0.340'
//row 1t

        var r2 = table.insertRow(2);
        var r2c1 = r2.insertCell(0);
        var r2c2 = r2.insertCell(1);
        var r2c3 = r2.insertCell(2);
        
        r2c1.innerHTML = '<button type="button" class="btn btn-outline-dark btn-sm m-1" id="r1" ">r</button>';
        r2c2.innerHTML = '0.341'
        r2c3.innerHTML='0.390'
//row 2t        
        var r3 = table.insertRow(3);
        var r3c1 = r3.insertCell(0);
        var r3c2 = r3.insertCell(1);
        var r3c3 = r3.insertCell(2);
        
        r3c1.innerHTML = '<button type="button"   class="btn btn-outline-dark btn-sm m-1" id="oo1 ">oo</button>'
        r3c2.innerHTML = '0.405'
        r3c3.innerHTML='0.475'
//row 3t
        var r4 = table.insertRow(4);
        var r4c1 = r4.insertCell(0);
        var r4c2 = r4.insertCell(1);
        var r4c3 = r4.insertCell(2);
        
        r4c1.innerHTML = '<button type="button"  class="btn btn-outline-dark btn-sm m-1" id="j" ">j</button>'
        r4c2.innerHTML = '0.476'
        r4c3.innerHTML = '0.540'
//row 4t        
        var r5 = table.insertRow(5);
        var r5c1 = r5.insertCell(0);
        var r5c2 = r5.insertCell(1);
        var r5c3 = r5.insertCell(2);
        
        r5c1.innerHTML = '<button type="button"  class="btn btn-outline-dark btn-sm m-1" id="u1" ">u</button>'
        r5c2.innerHTML = '0.541'
        r5c3.innerHTML='0.708'
//row6t
        var r6 = table.insertRow(6 );
        var r6c1 = r6.insertCell(0);
        var r6c2 = r6.insertCell(1);
        var r6c3 = r6.insertCell(2);
        
        r6c1.innerHTML = '<button type="button"  class="btn btn-outline-dark btn-sm m-1" id="v" ">v</button>'
        r6c2.innerHTML = '0.709'
        r6c3.innerHTML='0.778'
//row 7t        
        var r7 = table.insertRow(7);
        var r7c1 = r7.insertCell(0);
        var r7c2 = r7.insertCell(1);
        var r7c3 = r7.insertCell(2);
        
        r7c1.innerHTML = '<button type="button"   class="btn btn-outline-dark btn-sm m-1" id="aa1" ">aa</button>'
        r7c2.innerHTML = '0.778'
        r7c3.innerHTML='0.880'
//row 8t        
        var r8 = table.insertRow(8 );
        var r8c1 = r8.insertCell(0);
        var r8c2 = r8.insertCell(1);
        var r8c3 = r8.insertCell(2);
       
        r8c1.innerHTML = '<button type="button"  class="btn btn-outline-dark btn-sm m-1" id="r2" ">r</button>'
        r8c2.innerHTML = '0.880'
        r8c3.innerHTML='0.980'
//row 9t        
        var r9 = table.insertRow(9 );
        var r9c1 = r9.insertCell(0);
        var r9c2 = r9.insertCell(1);
        var r9c3 = r9.insertCell(2);
        
        r9c1.innerHTML = '<button type="button"   class="btn btn-outline-dark btn-sm m-1" id="t" ">t</button>'
        r9c2.innerHTML = '0.981'
        r9c3.innerHTML='1.028'
//row  10t        
        var r10 = table.insertRow(10);
        var r10c1 = r10.insertCell(0);
        var r10c2 = r10.insertCell(1);
        var r10c3 = r10.insertCell(2);
        
        r10c1.innerHTML = '<button type="button"  class="btn btn-outline-dark btn-sm m-1" id="a" ">a</button>'
        r10c2.innerHTML = '1.028'
        r10c3.innerHTML='1.075'
//row 11t
        var r11 = table.insertRow(11 );
        var r11c1 = r11.insertCell(0);
        var r11c2 = r11.insertCell(1);
        var r11c3 = r11.insertCell(2);
        
        r11c1.innerHTML = '<button type="button"  class="btn btn-outline-dark btn-sm m-1" id="l1" ">l</button>'
        r11c2.innerHTML = '1.075'
        r11c3.innerHTML='1.103'
//row 12t        
        var r12 = table.insertRow(12);
        var r12c1 = r12.insertCell(0);
        var r12c2 = r12.insertCell(1);
        var r12c3 = r12.insertCell(2);
        
        r12c1.innerHTML = '<button type="button"  class="btn btn-outline-dark btn-sm m-1" id="l2" ">l</button>'
        r12c2.innerHTML = '1.103'
        r12c3.innerHTML = '1.143'
//row 13t
        var r13 = table.insertRow(13 );
        var r13c1 = r13.insertCell(0);
        var r13c2 = r13.insertCell(1);
        var r13c3 = r13.insertCell(2);

        r13c1.innerHTML = '<button type="button"  class="btn btn-outline-dark btn-sm m-1" id="oo2" ">oo</button>'
        r13c2.innerHTML = '1.144'
        r13c3.innerHTML='1.235'
//row  14t        
        var r14 = table.insertRow(14 );
        var r14c1 = r14.insertCell(0);
        var r14c2 = r14.insertCell(1);
        var r14c3 = r14.insertCell(2);
        
        r14c1.innerHTML = '<button type="button"   class="btn btn-outline-dark btn-sm m-1" id="n" ">n</button>'
        r14c2.innerHTML = '1.235'
        r14c3.innerHTML='1.264'
//row  15t        
        var r15 = table.insertRow(15 );
        var r15c1 = r15.insertCell(0);
        var r15c2 = r15.insertCell(1);
        var r15c3 = r15.insertCell(2);
        
        r15c1.innerHTML = '<button type="button"  class="btn btn-outline-dark btn-sm m-1" id="i" ">i</button>'
        r15c2.innerHTML = '1.265'
        r15c3.innerHTML='1.404'
//row 16t        
        var r16 = table.insertRow(16 );
        var r16c1 = r16.insertCell(0);
        var r16c2 = r16.insertCell(1);
        var r16c3 = r16.insertCell(2);
        
        r16c1.innerHTML = '<button type="button"  class="btn btn-outline-dark btn-sm m-1" id="m1" ">m</button>'
        r16c2.innerHTML = '1.405'
        r16c3.innerHTML='1.448'
//row 17t        
        var r17 = table.insertRow(17 );
        var r17c1 = r17.insertCell(0);
        var r17c2 = r17.insertCell(1);
        var r17c3 = r17.insertCell(2);
        
        r17c1.innerHTML = '<button type="button"   class="btn btn-outline-dark btn-sm m-1" id="u2" ">u</button>'
        r17c2.innerHTML = '1.449'
        r17c3.innerHTML = '1.605'
//row 18t
        var r18 = table.insertRow(18 );
        var r18c1 = r18.insertCell(0);
        var r18c2 = r18.insertCell(1);
        var r18c3 = r18.insertCell(2);
        var r18c4 = r18.insertCell(3);
        r18c1.innerHTML = '<button type="button"   class="btn btn-outline-dark btn-sm m-1" id="kh" ">kh</button>'
        r18c2.innerHTML = '1.666'
        r18c3.innerHTML='1.736'
//row 19t
        var r19 = table.insertRow(19 );
        var r19c1 = r19.insertCell(0);
        var r19c2 = r19.insertCell(1);
        var r19c3 = r19.insertCell(2);
       
        r19c1.innerHTML = '<button type="button"  class="btn btn-outline-dark btn-sm m-1" id="y" ">y</button>'
        r19c2.innerHTML = '1.737'
        r19c3.innerHTML='1.180'
//row 20t
        var r20 = table.insertRow(20 );
        var r20c1 = r20.insertCell(0);
        var r20c2 = r20.insertCell(1);
        var r20c3 = r20.insertCell(2);
        
        r20c1.innerHTML = '<button type="button"   class="btn btn-outline-dark btn-sm m-1" id="aa2" ">aa</button>'
        r20c2.innerHTML = '1.181'
        r20c3.innerHTML='1.859'
//row 21t
        var r21 = table.insertRow(21 );
        var r21c1 = r21.insertCell(0);
        var r21c2 = r21.insertCell(1);
        var r21c3 = r21.insertCell(2);

        r21c1.innerHTML = '<button type="button"  class="btn btn-outline-dark btn-sm m-1" id="m2" ">m</button>'
        r21c2.innerHTML = '1.860'
        r21c3.innerHTML ='1.954'
//row 22t
        var r22 = table.insertRow(22 );
        var r22c1 = r22.insertCell(0);
        var r22c2 = r22.insertCell(1);
        var r22c3 = r22.insertCell(2);
        
        r22c1.innerHTML = '<button type="button"  class="btn btn-outline-dark btn-sm m-1" id="sh" ">sh</button>'
        r22c2.innerHTML = '1.970'
        r22c3.innerHTML = '2.110'
//row 23t
        var r23 = table.insertRow(23 );
        var r23c1 = r23.insertCell(0);
        var r23c2 = r23.insertCell(1);
        var r23c3 = r23.insertCell(2);
        
        r23c1.innerHTML = '<button type="button"  class="btn btn-outline-dark btn-sm m-1" id="aa3" ">aa</button>'
        r23c2.innerHTML = '2.111'
        r23c3.innerHTML = '2.227'
//row 24t        
        var r24 = table.insertRow(24 );
        var r24c1 = r24.insertCell(0);
        var r24c2 = r24.insertCell(1);
        var r24c3 = r24.insertCell(2);

        r24c1.innerHTML = '<button type="button"  class="btn btn-outline-dark btn-sm m-1" id="l3" ">l</button>'
        r24c2.innerHTML = '2.230'
        r24c3.innerHTML = '2.310'

//row 25t
        var r25 = table.insertRow(25 );
        var r25c1 = r25.insertCell(0);
        var r25c2 = r25.insertCell(1);
        var r25c3 = r25.insertCell(2);

        r25c1.innerHTML = '<button type="button"  class="btn btn-outline-dark btn-sm m-1" id="u3" ">u</button>'
        r25c2.innerHTML = '2.312'
        r25c3.innerHTML = '2.466'



// adding region for each phenome

      $( "#ii" ).click(function(){
        wavesurfer.clearRegions();
        wavesurfer.addRegion({id:'one',start:0.109,end:0.340,color: randomColor(0.1)});
      });
      $( "#r1" ).click(function(){
        wavesurfer.clearRegions();
        wavesurfer.addRegion({id:'two',start:0.341,end:0.390,color: randomColor(0.1)});
      });

      $( "#oo1" ).click(function(){
        wavesurfer.clearRegions();
        wavesurfer.addRegion({id:'two',start:0.405,end:0.475,color: randomColor(0.1)});
      });

      $( "#j" ).click(function(){
        wavesurfer.clearRegions();
        wavesurfer.addRegion({id:'two',start:0.476,end:0.540,color: randomColor(0.1)});
      });

      $( "#u1" ).click(function(){
        wavesurfer.clearRegions();
        wavesurfer.addRegion({id:'two',start:0.541,end:0.708,color: randomColor(0.1)});
      });

      $( "#v" ).click(function(){
        wavesurfer.clearRegions();
        wavesurfer.addRegion({id:'two',start:0.709 ,end:0.778,color: randomColor(0.1)});
      });

      $( "#aa1" ).click(function(){
        wavesurfer.clearRegions();
        wavesurfer.addRegion({id:'two',start:0.778,end:0.880,color: randomColor(0.1)});
      });

      $( "#r2" ).click(function(){
        wavesurfer.clearRegions();
        wavesurfer.addRegion({id:'two',start:0.880,end:0.980,color: randomColor(0.1)});
      });

      $( "#t" ).click(function(){
        wavesurfer.clearRegions();
        wavesurfer.addRegion({id:'two',start:0.981,end:1.028,color: randomColor(0.1)});
      });

      $( "#a" ).click(function(){
        wavesurfer.clearRegions();
        wavesurfer.addRegion({id:'two',start:1.028,end:1.075,color: randomColor(0.1)});
      });

      $( "#l1" ).click(function(){
        wavesurfer.clearRegions();
        wavesurfer.addRegion({id:'two',start:1.075,end:1.103,color: randomColor(0.1)});
      });

      $( "#l2" ).click(function(){
        wavesurfer.clearRegions();
        wavesurfer.addRegion({id:'two',start:1.103,end:1.143 ,color: randomColor(0.1)});
      });


      $( "#oo2" ).click(function(){
        wavesurfer.clearRegions();
        wavesurfer.addRegion({id:'two',start:1.144,end:1.234 ,color: randomColor(0.1)});
      });

      $( "#n" ).click(function(){
        wavesurfer.clearRegions();
        wavesurfer.addRegion({id:'two',start:1.235,end:1.264 ,color: randomColor(0.1)});
      });

      $( "#i" ).click(function(){
        wavesurfer.clearRegions();
        wavesurfer.addRegion({id:'two',start:1.265,end:1.404 ,color: randomColor(0.1)});
      });

      $( "#m1" ).click(function(){
        wavesurfer.clearRegions();
        wavesurfer.addRegion({id:'two',start:1.405,end:1.448 ,color: randomColor(0.1)});
      });

      $( "#u2" ).click(function(){
        wavesurfer.clearRegions();
        wavesurfer.addRegion({id:'two',start:1.449,end:1.605 ,color: randomColor(0.1)});
      });

      $( "#kh" ).click(function(){
        wavesurfer.clearRegions();
        wavesurfer.addRegion({id:'two',start:1.666,end:1.736 ,color: randomColor(0.1)});
      });

      $( "#y" ).click(function(){
        wavesurfer.clearRegions();
        wavesurfer.addRegion({id:'two',start:1.737,end:1.180 ,color: randomColor(0.1)});
      });

      $( "#aa2" ).click(function(){
        wavesurfer.clearRegions();
        wavesurfer.addRegion({id:'two',start:1.181,end:1.859 ,color: randomColor(0.1)});
      });

      $( "#m2" ).click(function(){
        wavesurfer.clearRegions();
        wavesurfer.addRegion({id:'two',start:1.860,end:1.954   ,color: randomColor(0.1)});
      });

      $( "#sh" ).click(function(){
        wavesurfer.clearRegions();
        wavesurfer.addRegion({id:'two',start:1.970,end:2.110 ,color: randomColor(0.1)});
      });

      $( "#aa3" ).click(function(){
        wavesurfer.clearRegions();
        wavesurfer.addRegion({id:'two',start:2.111,end:2.227 ,color: randomColor(0.1)});
      });

      $( "#l3" ).click(function(){
        wavesurfer.clearRegions();
        wavesurfer.addRegion({id:'two',start:2.230,end:2.310 ,color: randomColor(0.1)});
      });

      $( "#u3" ).click(function(){
        wavesurfer.clearRegions();
        wavesurfer.addRegion({id:'two',start:2.312,end:2.466 ,color: randomColor(0.1)});
      });

      
		}

		if(sel==="Tamil"){
			document.getElementById("utterance").innerHTML = " வணக்கம் இன்ரைய தலைப்பு செய்திகள்" ;
			document.getElementById("translit").innerHTML ="vand~akkam inraiya talaippu cheydikal:" ;
			document.getElementById("syll").innerHTML = "  va nd~a kkam in rai ya ta lai ppu chey di kal:" ;
			document.getElementById("ph").innerHTML = "    v a nd~ a kk a m i n r ai y a t a l ai pp u ch ey d i k a l:"  ;
			wavesurfer.load('tamil.mp3');
			$("#final1").empty();
			$("#final2").empty();

		}


	});
$( "#reset" ).click(function(){
	location.reload();
});

    

$("#target").val($("#target option:first").val());


});