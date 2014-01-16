/*
	 説明
	 イラストレーター用のCMYKカラーチップ生成jsです。
	 このカラーチップをお使いのプリンターで出力し、参照する事で
	 データと出力の色合わせが出来ます。

	 使い方
	 イラストレーターを開く→ファイル→スクリプト→その他のスクリプト→このファイルを選択し開く
	 数値が併記されたCMYKカラーチップが展開されます。
	 それをお使いのプリンターで出力し、お使い下さい。
	 */
var i = 6; //チップの分割数
var h = i-1 ; //繰り返し用

var docObj = documents.add(DocumentColorSpace.CMYK,500,500);

var array;
var m = 0;//m マゼンタ
var c = 0;//c シアン
var y = 0;//y イエロー
var k = 0;//k ブラック

for(k = 0 ; k <= h ; k ++){
	for(y = 0 ; y <= h ; y ++){
		for(m = 0 ; m <= h ; m ++){
			for(c = 0 ; c <= h ; c ++){

				var pObj = docObj.pathItems.add(); //線の指定
				pObj.filled      = false;
				pObj.stroked     = true;
				pObj.strokeWidth = 25;

				pObj.strokeColor.cyan    = c * 100 / h;
				pObj.strokeColor.magenta = m * 100 / h;
				pObj.strokeColor.yellow  = y * 100 / h;
				pObj.strokeColor.black   = k * 100 / h;

				//始点
				var pt = pObj.pathPoints.add();
				var point = [25 + (c * 50) + (k * 50 * i) , 0 - (50 * m) - (y * 50 * i)];
				pt.leftDirection  = point;
				pt.anchor         = point;
				pt.rightDirection = point;

				//終点
				var pt = pObj.pathPoints.add();
				point = [25 + (c * 50) + (k * 50 * i) , 25 - (50 * m) - (y * 50 * i)];
				pt.leftDirection  = point;
				pt.anchor         = point;
				pt.rightDirection = point;

				//テキストの指定ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
				var textObj            = docObj.textFrames.add();
				textObj.contents       = 'C:' + c * 100 / h;
				textObj.textRange.size = 5;
				textObj.orientation    = TextOrientation.HORIZONTAL;                
				textObj.translate( 0 + (c * 50) + (k * 50 * i) , 0 - (50 * m) + 18 - (y * 50 * i) );

				var textObj            = docObj.textFrames.add();
				textObj.contents       = 'M:' + m * 100 / h;
				textObj.textRange.size = 5;
				textObj.orientation    = TextOrientation.HORIZONTAL;                
				textObj.translate( 0 + (c * 50) + (k * 50 * i) , 0 - (50 * m) + 12 - (y * 50 * i) );

				var textObj            = docObj.textFrames.add();
				textObj.contents       = 'Y:' + y * 100 / h;
				textObj.textRange.size = 5;
				textObj.orientation    = TextOrientation.HORIZONTAL;                
				textObj.translate( 0 + (c * 50) + (k * 50 * i) , 0 - (50 * m) +  6 - (y * 50 * i) );

				var textObj            = docObj.textFrames.add();
				textObj.contents       = 'K:' + k * 100 / h;
				textObj.textRange.size = 5;
				textObj.orientation    = TextOrientation.HORIZONTAL;                
				textObj.translate( 0 + (c * 50) + (k * 50 * i) , 0 - (50 * m)      - (y * 50 * i) );
				//テキストの指定ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
			}
		}
	}
}
