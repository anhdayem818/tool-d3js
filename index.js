    var D, aspect, camera, cube, geometry, height, light, lil_cube, lil_geometry, material, renderer, scene, width;

    width = 960;

    height = 900;

    aspect = width / height;

    D = 1;

    scene = new THREE.Scene();

    // camera = new THREE.OrthographicCamera(-D * aspect, D * aspect, D, -D, 1, 1000);

    // renderer = new THREE.SVGRenderer();
    renderer = new THREE.SVGRenderer();

    renderer.setSize(width, height);

    document.body.appendChild(renderer.domElement);

    // material = new THREE.MeshPhongMaterial({
    //   ambient: 0x555555,
    //   color: 0x555555,
    //   shading: THREE.SmoothShading
    // });

    // geometry = new THREE.BoxGeometry(1, 2, 1 );

    // cube = new THREE.Mesh(geometry, material);

    // scene.add(cube);

    // geometry = new THREE.Geometry(1, 1.2 );

    // cube = new THREE.Mesh(geometry, material);

    // scene.add(cube);



    // var x = 0, y = 0;

    // var heartShape = new THREE.Shape();

    // heartShape.moveTo( x + 5, y + 5 );
    // heartShape.bezierCurveTo( x + 5, y + 5, x + 4, y, x, y );
    // heartShape.bezierCurveTo( x - 6, y, x - 6, y + 7,x - 6, y + 7 );
    // heartShape.bezierCurveTo( x - 6, y + 11, x - 3, y + 15.4, x + 5, y + 19 );
    // heartShape.bezierCurveTo( x + 12, y + 15.4, x + 16, y + 11, x + 16, y + 7 );
    // heartShape.bezierCurveTo( x + 16, y + 7, x + 16, y, x + 10, y );
    // heartShape.bezierCurveTo( x + 7, y, x + 5, y + 5, x + 5, y + 5 );
    // heartShape.bezierCurveTo( x + 8, y, x + 5, y + 5, x + 5, y + 5 );
    // heartShape.bezierCurveTo( x + 9, y, x + 5, y + 5, x + 5, y + 5 );
    // heartShape.bezierCurveTo( x + 10, y, x + 5, y + 5, x + 5, y + 5 );

    // heartShape.moveTo( 0,0 );
    // heartShape.lineTo( 0, 50 );
    // heartShape.lineTo( 20, 80 );
    // heartShape.lineTo( 50, 50 );
    // heartShape.lineTo( 0, 0 );

    // geometry = new THREE.ShapeGeometry( heartShape );
    // material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    // var mesh = new THREE.Mesh( geometry, material ) ;
    // scene.add( mesh );


    // var geometry = new THREE.Geometry();
    // geometry.vertices.push( new THREE.Vector3( 0, 5, 0 ) );
    // geometry.vertices.push( new THREE.Vector3( 5, -5, -2 ) );
    // geometry.vertices.push( new THREE.Vector3( -5, -5, 2 ) );
    // geometry.vertices.push( new THREE.Vector3( 0, 5, 0 ) ); // close the loop

    // // material
    // var material = new THREE.LineBasicMaterial( { color: 0xffffff, linewidth: 1 } );

    // // line
    // var line = new THREE.Line( geometry, material );
    // scene.add( line );

    // camera.lookAt(scene.position);



  // Camera: Y up, X right, Z up

    var d,r,c;
    
    var canvasWidth = 900;
    var canvasHeight = 900;
    var canvasRatio = canvasWidth / canvasHeight;
    
    windowScale = 30;
    var windowWidth = windowScale * canvasRatio;
    var windowHeight = windowScale;

    camera = new THREE.OrthographicCamera(windowWidth / -2, windowWidth / 2, windowHeight / 2, windowHeight / -2, 0, 40);
    
    function drawSquare(x1, y1, x2, y2) {

      var square = new THREE.Geometry();
      console.log(square);
      square.vertices.push(new THREE.Vector3(x1, y1, 0));
      square.vertices.push(new THREE.Vector3(x1, y2, 0));
      square.vertices.push(new THREE.Vector3(x2, y1, 0));
      square.vertices.push(new THREE.Vector3(x2, y2, 0));
    
      square.faces.push(new THREE.Face3(0, 1, 2));
      square.faces.push(new THREE.Face3(1, 2, 3));
      return square;
    }

    function showGrids() {
      // Background grid and axes. Grid step size is 1, axes cross at 0, 0
      Coordinates.drawGrid({ size: 100, scale: 1, orientation: "z" });
      Coordinates.drawAxes({ axisLength: 11, axisOrientation: "x", axisRadius: 0.04 });
      Coordinates.drawAxes({ axisLength: 11, axisOrientation: "y", axisRadius: 0.04 });
    }

    // var focus = new THREE.Vector3(5, 5, 0);
    // camera.position.x = focus.x;
    // camera.position.y = focus.y;
    // camera.position.z = 10;
    // camera.lookAt(focus);
    camera.position.set( 0, 0, 100 );
    camera.lookAt( 0, 0, 0 );

    showGrids()



    // var square_material = new THREE.MeshBasicMaterial({ color: 0xF6831E, side: THREE.DoubleSide });
    // var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    // var square_geometry = drawSquare(1, 1, 4, 4);
    // var square_mesh = new THREE.Mesh(square_geometry, material);
    // scene.add(square_mesh);



    var material = new THREE.LineBasicMaterial({
      color: 0xF6831E
    });
    
    var points = [];
    points.push( new THREE.Vector3( - 10, 0, 0 ) );
    points.push( new THREE.Vector3( 0, 10, 0 ) );
    points.push( new THREE.Vector3( 10, 0, 0 ) );
    
    var geometry = new THREE.BufferGeometry().setFromPoints( points );
    
    var line = new THREE.Line( geometry, material );
    scene.add( line );

    scene.add( camera );


    renderer.render(scene, camera);


