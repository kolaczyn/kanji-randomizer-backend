const kanjiPopularityRaw = [
  ['一', '2'],
  ['二', '9'],
  ['仁', '1332'],
  ['三', '14'],
  ['四', '47'],
  ['五', '31'],
  ['六', '93'],
  ['七', '115'],
  ['八', '92'],
  ['九', '55'],
  ['十', '8'],
  ['百', '163'],
  ['千', '195'],
  ['万', '375'],
  ['億', '716'],
  ['憶', '1324'],
  ['兆', '1174'],
  ['眺', '1726'],
  ['挑', '989'],
  ['跳', '1716'],
  ['父', '646'],
  ['釜', '1761'],
  ['母', '570'],
  ['兄', '1219'],
  ['況', '490'],
  ['弟', '1161'],
  ['第', '160'],
  ['姉', '1473'],
  ['市', '42'],
  ['妹', '1446'],
  ['昧', '2500'],
  ['黒', '573'],
  ['紫', '1516'],
  ['此', '2078'],
  ['柴', '1638'],
  ['雌', '1951'],
  ['青', '589'],
  ['晴', '1022'],
  ['清', '705'],
  ['請', '524'],
  ['情', '235'],
  ['精', '752'],
  ['靖', '1390'],
  ['静', '764'],
  ['赤', '584'],
  ['跡', '953'],
  ['緑', '1180'],
  ['禄', '2126'],
  ['録', '546'],
  ['黄', '1240'],
  ['横', '480'],
  ['白', '483'],
  ['泊', '1233'],
  ['伯', '1741'],
  ['拍', '1373'],
  ['迫', '773'],
  ['日', '1'],
  ['旧', '549'],
  ['曜', '940'],
  ['昨', '226'],
  ['酢', '1955'],
  ['作', '103'],
  ['詐', '1511'],
  ['映', '404'],
  ['英', '430'],
  ['央', '582'],
  ['暇', '1386'],
  ['暗', '1040'],
  ['闇', '1969'],
  ['暖', '1371'],
  ['昇', '826'],
  ['弁', '2077'],
  ['飛', '619'],
  ['景', '419'],
  ['京', '74'],
  ['影', '464'],
  ['星', '844'],
  ['生', '29'],
  ['性', '104'],
  ['姓', '1628'],
  ['牲', '1274'],
  ['産', '161'],
  ['易', '571'],
  ['是', '1045'],
  ['音', '491'],
  ['響', '502'],
  ['郷', '1077'],
  ['香', '859'],
  ['書', '169'],
  ['替', '979'],
  ['暫', '1112'],
  ['斬', '2132'],
  ['月', '23'],
  ['脱', '782'],
  ['服', '873'],
  ['肌', '1559'],
  ['脚', '1228'],
  ['却', '959'],
  ['膝', '2320'],
  ['股', '2212'],
  ['腰', '1306'],
  ['要', '106'],
  ['腹', '1286'],
  ['複', '915'],
  ['復', '438'],
  ['覆', '1378'],
  ['腕', '1163'],
  ['碗', '2500'],
  ['脇', '1806'],
  ['協', '121'],
  ['脅', '1183'],
  ['胸', '1144'],
  ['臓', '991'],
  ['蔵', '468'],
  ['脳', '459'],
  ['悩', '1084'],
  ['腸', '1807'],
  ['肝', '1118'],
  ['干', '1349'],
  ['汗', '1502'],
  ['幹', '364'],
  ['刊', '855'],
  ['肺', '1387'],
  ['膜', '1804'],
  ['胞', '1379'],
  ['包', '954'],
  ['泡', '1872'],
  ['抱', '871'],
  ['砲', '1268'],
  ['飽', '1780'],
  ['脈', '1477'],
  ['肥', '1469'],
  ['豚', '1864'],
  ['勝', '185'],
  ['騰', '1420'],
  ['膨', '1293'],
  ['有', '282'],
  ['肯', '1813'],
  ['骨', '936'],
  ['背', '696'],
  ['火', '574'],
  ['炉', '1359'],
  ['焼', '982'],
  ['燃', '948'],
  ['然', '401'],
  ['煙', '1290'],
  ['炒', '2001'],
  ['灯', '1605'],
  ['畑', '1176'],
  ['爆', '735'],
  ['暴', '692'],
  ['災', '976'],
  ['熱', '700'],
  ['蒸', '1552'],
  ['承', '775'],
  ['煮', '1565'],
  ['者', '38'],
  ['老', '803'],
  ['焦', '973'],
  ['点', '165'],
  ['占', '694'],
  ['粘', '1410'],
  ['無', '274'],
  ['舞', '655'],
  ['黙', '1338'],
  ['熟', '1415'],
  ['塾', '1297'],
  ['水', '223'],
  ['氷', '1450'],
  ['洋', '763'],
  ['羊', '1852'],
  ['海', '200'],
  ['悔', '1460'],
  ['毎', '436'],
  ['沖', '929'],
  ['中', '11'],
  ['仲', '919'],
  ['忠', '1113'],
  ['波', '740'],
  ['破', '590'],
  ['流', '280'],
  ['瀬', '1152'],
  ['湾', '545'],
  ['浦', '977'],
  ['補', '332'],
  ['捕', '604'],
  ['舗', '1412'],
  ['潟', '1204'],
  ['印', '682'],
  ['浜', '645'],
  ['兵', '522'],
  ['港', '495'],
  ['津', '1036'],
  ['湖', '1344'],
  ['胡', '1995'],
  ['沢', '296'],
  ['択', '847'],
  ['沼', '1467'],
  ['召', '1540'],
  ['昭', '697'],
  ['照', '1004'],
  ['招', '840'],
  ['紹', '963'],
  ['澤', '2374'],
  ['泥', '1589'],
  ['汚', '908'],
  ['濁', '1883'],
  ['河', '663'],
  ['可', '314'],
  ['何', '340'],
  ['荷', '1230'],
  ['川', '181'],
  ['滝', '1478'],
  ['竜', '1195'],
  ['龍', '1734'],
  ['源', '738'],
  ['原', '172'],
  ['湯', '1356'],
  ['池', '827'],
  ['地', '40'],
  ['也', '1404'],
  ['漠', '1611'],
  ['温', '838'],
  ['湧', '2070'],
  ['勇', '1319'],
  ['沸', '1709'],
  ['溶', '1364'],
  ['容', '264'],
  ['滑', '1238'],
  ['浴', '1136'],
  ['欲', '902'],
  ['浮', '776'],
  ['漂', '1492'],
  ['票', '489'],
  ['標', '686'],
  ['浸', '1447'],
  ['侵', '1025'],
  ['寝', '1034'],
  ['潤', '1644'],
  ['漬', '1818'],
  ['湿', '1517'],
  ['濡', '2260'],
  ['需', '935'],
  ['儒', '2162'],
  ['沈', '1271'],
  ['枕', '2084'],
  ['潜', '1329'],
  ['浅', '1253'],
  ['銭', '1008'],
  ['践', '1570'],
  ['深', '484'],
  ['没', '1385'],
  ['液', '1210'],
  ['淡', '1436'],
  ['談', '272'],
  ['炎', '1242'],
  ['濃', '1200'],
  ['農', '385'],
  ['測', '761'],
  ['則', '753'],
  ['側', '216'],
  ['注', '497'],
  ['柱', '1119'],
  ['駐', '955'],
  ['満', '515'],
  ['両', '247'],
  ['円', '69'],
  ['淵', '1593'],
  ['添', '1501'],
  ['漏', '1298'],
  ['洪', '1778'],
  ['滅', '1222'],
  ['派', '164'],
  ['渉', '499'],
  ['決', '71'],
  ['治', '109'],
  ['済', '168'],
  ['剤', '1151'],
  ['斉', '1209'],
  ['法', '100'],
  ['去', '440'],
  ['滞', '1107'],
  ['帯', '746'],
  ['減', '261'],
  ['消', '345'],
  ['肖', '1889'],
  ['渡', '446'],
  ['度', '110'],
  ['漢', '1487'],
  ['洗', '1168'],
  ['先', '173'],
  ['濯', '1698'],
  ['浄', '1383'],
  ['澄', '1722'],
  ['登', '566'],
  ['淳', '1629'],
  ['潔', '1595'],
  ['泣', '1380'],
  ['涙', '1381'],
  ['酒', '1006'],
  ['渋', '1011'],
  ['涼', '1783'],
  ['活', '171'],
  ['括', '1026'],
  ['激', '560'],
  ['潰', '2500'],
  ['油', '690'],
  ['由', '325'],
  ['汁', '1843'],
  ['泳', '1223'],
  ['永', '846'],
  ['詠', '2000'],
  ['汽', '2020'],
  ['気', '113'],
  ['浩', '1149'],
  ['準', '425'],
  ['演', '267'],
  ['混', '824'],
  ['昆', '1688'],
  ['涯', '1525'],
  ['崖', '1835'],
  ['冷', '667'],
  ['令', '804'],
  ['鈴', '880'],
  ['齢', '770'],
  ['歯', '1106'],
  ['零', '1217'],
  ['凄', '2313'],
  ['凝', '1712'],
  ['配', '359'],
  ['酬', '1515'],
  ['州', '386'],
  ['醜', '2074'],
  ['酔', '1640'],
  ['粋', '1768'],
  ['酵', '1862'],
  ['孝', '1030'],
  ['酷', '1596'],
  ['告', '188'],
  ['酸', '1218'],
  ['木', '317'],
  ['林', '656'],
  ['森', '609'],
  ['杉', '1095'],
  ['桂', '1651'],
  ['桜', '1237'],
  ['栃', '1427'],
  ['朴', '1626'],
  ['桐', '1668'],
  ['桃', '1784'],
  ['逃', '931'],
  ['松', '471'],
  ['訟', '1061'],
  ['公', '118'],
  ['柿', '1745'],
  ['梅', '1232'],
  ['柳', '1169'],
  ['樹', '988'],
  ['根', '620'],
  ['恨', '1877'],
  ['痕', '1958'],
  ['枝', '1401'],
  ['支', '159'],
  ['肢', '2289'],
  ['鼓', '1795'],
  ['析', '980'],
  ['棒', '1455'],
  ['奉', '1624'],
  ['捧', '2286'],
  ['杖', '2387'],
  ['丈', '1375'],
  ['枠', '922'],
  ['棚', '1594'],
  ['椅', '2245'],
  ['机', '1671'],
  ['飢', '1659'],
  ['樽', '1981'],
  ['槽', '1809'],
  ['柵', '2500'],
  ['冊', '1313'],
  ['橋', '553'],
  ['校', '294'],
  ['交', '178'],
  ['絞', '1288'],
  ['効', '538'],
  ['郊', '1304'],
  ['村', '253'],
  ['極', '460'],
  ['格', '281'],
  ['各', '243'],
  ['閣', '444'],
  ['客', '557'],
  ['権', '156'],
  ['機', '127'],
  ['幾', '1725'],
  ['械', '1321'],
  ['戒', '1062'],
  ['札', '921'],
  ['株', '432'],
  ['杯', '1235'],
  ['不', '101'],
  ['柄', '1140'],
  ['病', '384'],
  ['枚', '911'],
  ['概', '1335'],
  ['核', '475'],
  ['様', '493'],
  ['植', '699'],
  ['殖', '1362'],
  ['模', '668'],
  ['条', '363'],
  ['柔', '1187'],
  ['集', '210'],
  ['栗', '1550'],
  ['染', '837'],
  ['梨', '1331'],
  ['桑', '1650'],
  ['査', '184'],
  ['李', '1147'],
  ['社', '21'],
  ['禅', '1902'],
  ['戦', '78'],
  ['祈', '1462'],
  ['神', '347'],
  ['申', '492'],
  ['伸', '730'],
  ['紳', '1790'],
  ['祝', '1184'],
  ['礼', '1185'],
  ['福', '467'],
  ['幅', '641'],
  ['副', '360'],
  ['祥', '1273'],
  ['詳', '1178'],
  ['祉', '1063'],
  ['止', '310'],
  ['視', '362'],
  ['初', '152'],
  ['袖', '1960'],
  ['裸', '1796'],
  ['裕', '1048'],
  ['裾', '2334'],
  ['襟', '2030'],
  ['禁', '681'],
  ['金', '53'],
  ['銀', '395'],
  ['銅', '1505'],
  ['同', '15'],
  ['胴', '1904'],
  ['洞', '1618'],
  ['筒', '1631'],
  ['鉱', '1376'],
  ['広', '263'],
  ['弘', '1059'],
  ['鉄', '672'],
  ['鋼', '1246'],
  ['綱', '1053'],
  ['剛', '1576'],
  ['岡', '463'],
  ['鉛', '1710'],
  ['沿', '1121'],
  ['銃', '1013'],
  ['充', '949'],
  ['鎖', '1250'],
  ['鎌', '1587'],
  ['針', '505'],
  ['釘', '2496'],
  ['鋭', '1395'],
  ['鈍', '1574'],
  ['鍵', '2029'],
  ['建', '300'],
  ['健', '572'],
  ['錠', '1934'],
  ['定', '48'],
  ['鍛', '1793'],
  ['段', '479'],
  ['鉢', '1890'],
  ['本', '10'],
  ['鍋', '1810'],
  ['鐘', '1681'],
  ['銘', '1394'],
  ['名', '177'],
  ['鏡', '1506'],
  ['境', '346'],
  ['錦', '1440'],
  ['釣', '1542'],
  ['錯', '1740'],
  ['鎮', '1617'],
  ['土', '307'],
  ['場', '52'],
  ['域', '396'],
  ['堀', '1285'],
  ['堤', '1658'],
  ['提', '254'],
  ['垣', '1539'],
  ['塀', '1991'],
  ['併', '966'],
  ['塚', '869'],
  ['壇', '1512'],
  ['塔', '1708'],
  ['搭', '1472'],
  ['答', '486'],
  ['城', '795'],
  ['成', '116'],
  ['誠', '1128'],
  ['盛', '712'],
  ['堪', '1953'],
  ['勘', '1494'],
  ['甚', '1961'],
  ['壊', '727'],
  ['懐', '1493'],
  ['埋', '1110'],
  ['塩', '1148'],
  ['均', '715'],
  ['塊', '1800'],
  ['声', '388'],
  ['売', '202'],
  ['型', '482'],
  ['刑', '864'],
  ['形', '418'],
  ['瓶', '1528'],
  ['瓦', '1850'],
  ['塗', '1414'],
  ['壁', '1037'],
  ['璧', '2500'],
  ['癖', '1973'],
  ['墨', '1616'],
  ['王', '684'],
  ['球', '302'],
  ['求', '220'],
  ['救', '799'],
  ['環', '409'],
  ['還', '910'],
  ['珍', '1330'],
  ['珠', '1711'],
  ['朱', '1788'],
  ['殊', '1352'],
  ['理', '86'],
  ['里', '1096'],
  ['裏', '812'],
  ['現', '85'],
  ['班', '1592'],
  ['皇', '721'],
  ['望', '470'],
  ['聖', '1165'],
  ['麦', '1615'],
  ['麺', '2331'],
  ['面', '186'],
  ['素', '660'],
  ['毒', '1419'],
  ['奏', '1067'],
  ['泰', '1281'],
  ['美', '462'],
  ['着', '376'],
  ['養', '888'],
  ['人', '5'],
  ['例', '399'],
  ['俺', '1946'],
  ['僕', '1236'],
  ['撲', '1283'],
  ['業', '43'],
  ['偽', '1171'],
  ['為', '831'],
  ['倒', '791'],
  ['到', '1032'],
  ['債', '728'],
  ['他', '543'],
  ['佐', '474'],
  ['左', '630'],
  ['右', '602'],
  ['差', '449'],
  ['借', '932'],
  ['任', '217'],
  ['妊', '1413'],
  ['働', '417'],
  ['動', '73'],
  ['仕', '439'],
  ['士', '526'],
  ['僚', '709'],
  ['療', '600'],
  ['寮', '1705'],
  ['係', '232'],
  ['系', '567'],
  ['儲', '2442'],
  ['償', '854'],
  ['賞', '426'],
  ['休', '642'],
  ['住', '270'],
  ['保', '146'],
  ['呆', '1848'],
  ['褒', '2073'],
  ['信', '208'],
  ['僧', '1724'],
  ['曽', '1320'],
  ['増', '231'],
  ['贈', '1001'],
  ['憎', '1808'],
  ['層', '801'],
  ['仏', '819'],
  ['払', '813'],
  ['修', '603'],
  ['優', '334'],
  ['憂', '1625'],
  ['偉', '1639'],
  ['違', '344'],
  ['緯', '1430'],
  ['俊', '1007'],
  ['駿', '1817'],
  ['佳', '1643'],
  ['傑', '1926'],
  ['像', '856'],
  ['象', '394'],
  ['価', '250'],
  ['仮', '1039'],
  ['俳', '1137'],
  ['排', '1047'],
  ['輩', '1365'],
  ['倍', '714'],
  ['培', '1431'],
  ['位', '276'],
  ['伊', '703'],
  ['依', '906'],
  ['衣', '1214'],
  ['使', '219'],
  ['史', '511'],
  ['似', '923'],
  ['以', '126'],
  ['値', '518'],
  ['置', '277'],
  ['直', '246'],
  ['備', '356'],
  ['便', '729'],
  ['低', '435'],
  ['抵', '1182'],
  ['邸', '905'],
  ['底', '867'],
  ['停', '733'],
  ['亭', '1627'],
  ['偵', '1857'],
  ['貞', '1389'],
  ['候', '510'],
  ['侯', '2363'],
  ['喉', '2390'],
  ['仰', '1573'],
  ['供', '313'],
  ['共', '174'],
  ['体', '88'],
  ['伏', '1604'],
  ['件', '212'],
  ['俗', '1610'],
  ['谷', '508'],
  ['俵', '1481'],
  ['表', '77'],
  ['催', '536'],
  ['傾', '938'],
  ['傷', '845'],
  ['傍', '1660'],
  ['存', '577'],
  ['在', '211'],
  ['行', '20'],
  ['後', '26'],
  ['衡', '1847'],
  ['御', '1087'],
  ['徒', '817'],
  ['得', '175'],
  ['徳', '1091'],
  ['往', '1421'],
  ['主', '95'],
  ['征', '1578'],
  ['整', '478'],
  ['律', '992'],
  ['役', '315'],
  ['疫', '1661'],
  ['循', '1699'],
  ['盾', '1476'],
  ['術', '350'],
  ['衛', '400'],
  ['街', '891'],
  ['衝', '972'],
  ['微', '1108'],
  ['徹', '968'],
  ['撤', '811'],
  ['女', '151'],
  ['娘', '1145'],
  ['嬢', '2059'],
  ['譲', '984'],
  ['姫', '1566'],
  ['臣', '1249'],
  ['臨', '722'],
  ['妃', '1752'],
  ['婦', '671'],
  ['婿', '2099'],
  ['媒', '1900'],
  ['婚', '767'],
  ['姻', '1985'],
  ['因', '636'],
  ['嫁', '1581'],
  ['家', '133'],
  ['稼', '1264'],
  ['娠', '1623'],
  ['辰', '1600'],
  ['振', '614'],
  ['震', '893'],
  ['唇', '1992'],
  ['嬉', '2274'],
  ['喜', '769'],
  ['好', '423'],
  ['如', '1704'],
  ['妖', '1964'],
  ['妙', '1122'],
  ['始', '244'],
  ['嫌', '1207'],
  ['兼', '1164'],
  ['謙', '1582'],
  ['妻', '691'],
  ['姿', '441'],
  ['次', '222'],
  ['資', '179'],
  ['子', '72'],
  ['孔', '2052'],
  ['孤', '1239'],
  ['狐', '2185'],
  ['爪', '2025'],
  ['孫', '1388'],
  ['耳', '1328'],
  ['聴', '781'],
  ['恥', '1575'],
  ['助', '397'],
  ['目', '76'],
  ['眼', '1527'],
  ['限', '405'],
  ['瞳', '2069'],
  ['童', '1138'],
  ['憧', '2259'],
  ['瞬', '1265'],
  ['睡', '1739'],
  ['垂', '1720'],
  ['眠', '1315'],
  ['民', '28'],
  ['具', '629'],
  ['県', '140'],
  ['鼻', '1632'],
  ['自', '19'],
  ['省', '548'],
  ['少', '287'],
  ['小', '114'],
  ['看', '1060'],
  ['督', '534'],
  ['買', '520'],
  ['罪', '732'],
  ['罰', '1220'],
  ['羅', '1831'],
  ['覇', '1173'],
  ['貝', '1787'],
  ['貯', '1100'],
  ['購', '945'],
  ['溝', '1736'],
  ['構', '316'],
  ['講', '653'],
  ['財', '494'],
  ['才', '1497'],
  ['材', '565'],
  ['敗', '516'],
  ['貼', '2444'],
  ['賭', '1989'],
  ['賊', '2045'],
  ['賦', '2500'],
  ['武', '387'],
  ['員', '54'],
  ['貧', '1211'],
  ['貴', '970'],
  ['質', '389'],
  ['賢', '1159'],
  ['堅', '1049'],
  ['貿', '652'],
  ['賛', '868'],
  ['賀', '1056'],
  ['加', '130'],
  ['架', '1555'],
  ['嘉', '1553'],
  ['貸', '995'],
  ['代', '66'],
  ['袋', '1125'],
  ['贅', '2386'],
  ['賃', '961'],
  ['費', '321'],
  ['頁', '2500'],
  ['頼', '708'],
  ['願', '894'],
  ['頻', '1590'],
  ['歩', '554'],
  ['顧', '1058'],
  ['雇', '975'],
  ['類', '678'],
  ['順', '779'],
  ['頃', '2015'],
  ['題', '96'],
  ['須', '1339'],
  ['頭', '433'],
  ['豆', '1422'],
  ['額', '407'],
  ['顔', '676'],
  ['彦', '1117'],
  ['預', '981'],
  ['予', '180'],
  ['野', '120'],
  ['領', '138'],
  ['顕', '1536'],
  ['見', '22'],
  ['覧', '1510'],
  ['観', '476'],
  ['勧', '1068'],
  ['歓', '1065'],
  ['覗', '2500'],
  ['規', '349'],
  ['親', '406'],
  ['新', '51'],
  ['口', '284'],
  ['品', '225'],
  ['器', '525'],
  ['吸', '1054'],
  ['及', '544'],
  ['扱', '1057'],
  ['級', '785'],
  ['喫', '1347'],
  ['吹', '1133'],
  ['炊', '1777'],
  ['噴', '1270'],
  ['墳', '1822'],
  ['憤', '1863'],
  ['吐', '1674'],
  ['味', '442'],
  ['未', '650'],
  ['魅', '1206'],
  ['呼', '498'],
  ['叫', '1426'],
  ['喚', '1120'],
  ['換', '687'],
  ['呪', '2131'],
  ['喧', '2249'],
  ['叱', '2255'],
  ['嘆', '1584'],
  ['鳴', '1279'],
  ['唱', '1123'],
  ['昌', '1372'],
  ['晶', '1613'],
  ['唄', '2051'],
  ['叩', '2316'],
  ['叶', '2312'],
  ['咲', '1534'],
  ['噂', '2298'],
  ['嘘', '2235'],
  ['否', '561'],
  ['舌', '1830'],
  ['乱', '755'],
  ['后', '1583'],
  ['善', '765'],
  ['哲', '1093'],
  ['啓', '1403'],
  ['号', '585'],
  ['回', '50'],
  ['廻', '2500'],
  ['囲', '771'],
  ['井', '339'],
  ['耕', '1568'],
  ['圏', '1216'],
  ['巻', '944'],
  ['券', '583'],
  ['拳', '1935'],
  ['国', '3'],
  ['図', '539'],
  ['園', '628'],
  ['遠', '887'],
  ['団', '213'],
  ['困', '843'],
  ['固', '750'],
  ['個', '451'],
  ['箇', '2500'],
  ['囚', '2107'],
  ['言', '83'],
  ['話', '134'],
  ['議', '25'],
  ['義', '415'],
  ['儀', '739'],
  ['犠', '1189'],
  ['討', '528'],
  ['語', '301'],
  ['吾', '1828'],
  ['悟', '1411'],
  ['論', '227'],
  ['謎', '2021'],
  ['迷', '942'],
  ['謀', '1370'],
  ['某', '2106'],
  ['誰', '1933'],
  ['誘', '993'],
  ['説', '326'],
  ['税', '289'],
  ['認', '198'],
  ['忍', '1700'],
  ['刃', '1763'],
  ['諾', '1490'],
  ['読', '618'],
  ['誌', '851'],
  ['志', '823'],
  ['詞', '1636'],
  ['司', '759'],
  ['伺', '2209'],
  ['飼', '1392'],
  ['課', '455'],
  ['果', '258'],
  ['菓', '1719'],
  ['彙', '2500'],
  ['互', '914'],
  ['訳', '1050'],
  ['調', '87'],
  ['彫', '1533'],
  ['診', '1019'],
  ['試', '392'],
  ['式', '251'],
  ['計', '228'],
  ['評', '454'],
  ['平', '128'],
  ['訴', '427'],
  ['許', '720'],
  ['設', '145'],
  ['誇', '1272'],
  ['護', '351'],
  ['誤', '1150'],
  ['呉', '1729'],
  ['訂', '1690'],
  ['丁', '1312'],
  ['謝', '1028'],
  ['射', '937'],
  ['身', '320'],
  ['訓', '1134'],
  ['詰', '1020'],
  ['吉', '711'],
  ['該', '1648'],
  ['譜', '1919'],
  ['普', '757'],
  ['並', '599'],
  ['誕', '1024'],
  ['延', '747'],
  ['警', '366'],
  ['敬', '1078'],
  ['誓', '1567'],
  ['心', '157'],
  ['感', '233'],
  ['態', '353'],
  ['能', '273'],
  ['熊', '1105'],
  ['恋', '1296'],
  ['変', '238'],
  ['念', '390'],
  ['悪', '530'],
  ['亜', '1509'],
  ['愚', '1551'],
  ['急', '309'],
  ['惑', '777'],
  ['或', '2378'],
  ['怒', '1221'],
  ['奴', '1932'],
  ['努', '749'],
  ['忘', '1129'],
  ['亡', '661'],
  ['盲', '1767'],
  ['妄', '2264'],
  ['忙', '1475'],
  ['意', '99'],
  ['想', '381'],
  ['相', '45'],
  ['霜', '2151'],
  ['患', '796'],
  ['串', '2139'],
  ['悲', '1014'],
  ['非', '472'],
  ['扉', '1866'],
  ['斐', '2103'],
  ['怠', '1703'],
  ['台', '262'],
  ['胎', '1861'],
  ['恐', '878'],
  ['恵', '925'],
  ['恩', '1418'],
  ['懇', '1135'],
  ['息', '882'],
  ['慰', '1158'],
  ['尉', '2007'],
  ['憩', '1731'],
  ['懸', '889'],
  ['憲', '551'],
  ['懲', '1303'],
  ['徴', '850'],
  ['快', '1074'],
  ['怪', '1634'],
  ['慣', '1177'],
  ['貫', '1156'],
  ['惨', '1463'],
  ['参', '201'],
  ['慢', '1368'],
  ['漫', '1408'],
  ['怖', '1325'],
  ['布', '877'],
  ['恒', '1314'],
  ['惜', '1641'],
  ['昔', '1197'],
  ['悼', '1645'],
  ['卓', '1348'],
  ['慎', '999'],
  ['真', '279'],
  ['慌', '1826'],
  ['荒', '1099'],
  ['手', '60'],
  ['探', '930'],
  ['捜', '592'],
  ['指', '155'],
  ['旨', '1166'],
  ['脂', '1548'],
  ['採', '607'],
  ['菜', '1327'],
  ['彩', '1251'],
  ['拾', '1479'],
  ['揃', '2412'],
  ['前', '27'],
  ['挿', '1908'],
  ['接', '523'],
  ['摂', '1779'],
  ['掘', '1257'],
  ['屈', '1434'],
  ['窟', '2500'],
  ['抜', '726'],
  ['髪', '1474'],
  ['友', '622'],
  ['抹', '2006'],
  ['末', '456'],
  ['投', '236'],
  ['捨', '1266'],
  ['舎', '1170'],
  ['担', '422'],
  ['旦', '2500'],
  ['胆', '1449'],
  ['携', '1017'],
  ['技', '434'],
  ['岐', '1428'],
  ['擬', '1990'],
  ['疑', '283'],
  ['掃', '1255'],
  ['拙', '1938'],
  ['出', '13'],
  ['据', '1468'],
  ['居', '836'],
  ['撮', '1023'],
  ['最', '82'],
  ['掲', '899'],
  ['匂', '2213'],
  ['掛', '1027'],
  ['扶', '1879'],
  ['夫', '335'],
  ['援', '312'],
  ['挨', '2258'],
  ['拶', '2500'],
  ['拓', '1526'],
  ['推', '507'],
  ['拝', '1443'],
  ['控', '1000'],
  ['拒', '863'],
  ['巨', '892'],
  ['距', '1191'],
  ['批', '568'],
  ['比', '329'],
  ['拷', '2057'],
  ['考', '196'],
  ['損', '807'],
  ['摘', '564'],
  ['滴', '2019'],
  ['適', '670'],
  ['敵', '1205'],
  ['挟', '1870'],
  ['狭', '1346'],
  ['峡', '1833'],
  ['押', '789'],
  ['揺', '1079'],
  ['謡', '1580'],
  ['遥', '2376'],
  ['揮', '946'],
  ['輝', '1259'],
  ['擦', '1485'],
  ['察', '477'],
  ['握', '1003'],
  ['把', '1569'],
  ['琶', '1966'],
  ['打', '239'],
  ['折', '962'],
  ['拡', '611'],
  ['拘', '1336'],
  ['句', '1244'],
  ['措', '818'],
  ['授', '535'],
  ['受', '136'],
  ['拠', '858'],
  ['処', '547'],
  ['抑', '834'],
  ['擁', '1213'],
  ['撃', '473'],
  ['足', '343'],
  ['促', '998'],
  ['捉', '1976'],
  ['躍', '900'],
  ['踊', '1308'],
  ['用', '107'],
  ['踏', '723'],
  ['蹴', '2377'],
  ['就', '624'],
  ['児', '679'],
  ['克', '1333'],
  ['競', '610'],
  ['走', '626'],
  ['赴', '1649'],
  ['起', '374'],
  ['己', '1098'],
  ['記', '149'],
  ['紀', '780'],
  ['忌', '1882'],
  ['越', '897'],
  ['超', '597'],
  ['趣', '1153'],
  ['取', '122'],
  ['途', '717'],
  ['余', '680'],
  ['斜', '1504'],
  ['運', '255'],
  ['遣', '664'],
  ['送', '311'],
  ['遇', '1343'],
  ['偶', '1602'],
  ['隅', '1601'],
  ['遭', '1554'],
  ['曹', '1998'],
  ['遮', '1865'],
  ['巡', '1262'],
  ['通', '80'],
  ['痛', '903'],
  ['速', '576'],
  ['束', '918'],
  ['疎', '1572'],
  ['追', '411'],
  ['逮', '1423'],
  ['避', '756'],
  ['逸', '1524'],
  ['遺', '647'],
  ['遅', '833'],
  ['進', '142'],
  ['遂', '1423'],
  ['達', '500'],
  ['迎', '625'],
  ['込', '675'],
  ['入', '56'],
  ['退', '424'],
  ['返', '685'],
  ['辺', '428'],
  ['刀', '1794'],
  ['切', '324'],
  ['近', '194'],
  ['断', '338'],
  ['述', '379'],
  ['逆', '683'],
  ['週', '540'],
  ['周', '562'],
  ['過', '285'],
  ['渦', '1789'],
  ['造', '429'],
  ['遊', '941'],
  ['透', '1035'],
  ['選', '57'],
  ['辻', '1614'],
  ['方', '46'],
  ['肪', '1878'],
  ['坊', '1832'],
  ['妨', '1482'],
  ['訪', '372'],
  ['防', '331'],
  ['放', '288'],
  ['房', '808'],
  ['芳', '1302'],
  ['旅', '783'],
  ['族', '393'],
  ['旗', '1190'],
  ['棋', '1311'],
  ['期', '117'],
  ['欺', '1541'],
  ['基', '241'],
  ['其', '1930'],
  ['於', '2113'],
  ['施', '323'],
  ['旋', '1801'],
  ['北', '153'],
  ['南', '341'],
  ['西', '259'],
  ['東', '37'],
  ['凍', '1284'],
  ['棟', '1406'],
  ['春', '579'],
  ['夏', '659'],
  ['秋', '635'],
  ['冬', '1090'],
  ['朝', '248'],
  ['潮', '1231'],
  ['乾', '1453'],
  ['乙', '1841'],
  ['韓', '445'],
  ['午', '154'],
  ['昼', '1115'],
  ['晩', '1424'],
  ['夜', '487'],
  ['車', '333'],
  ['輸', '371'],
  ['諭', '1461'],
  ['愉', '1974'],
  ['癒', '1667'],
  ['軌', '1480'],
  ['輪', '693'],
  ['倫', '1322'],
  ['転', '327'],
  ['伝', '416'],
  ['軸', '1261'],
  ['軒', '1416'],
  ['軟', '1269'],
  ['較', '1172'],
  ['舟', '1786'],
  ['船', '713'],
  ['艦', '1363'],
  ['監', '408'],
  ['鑑', '1391'],
  ['艇', '1433'],
  ['廷', '1439'],
  ['庭', '816'],
  ['航', '665'],
  ['抗', '666'],
  ['丹', '1402'],
  ['雨', '950'],
  ['雷', '1491'],
  ['電', '268'],
  ['雪', '1131'],
  ['雲', '1256'],
  ['云', '2500'],
  ['曇', '1899'],
  ['雰', '1341'],
  ['分', '24'],
  ['紛', '994'],
  ['粉', '1484'],
  ['霧', '1747'],
  ['務', '111'],
  ['矛', '1538'],
  ['霞', '1603'],
  ['露', '928'],
  ['路', '529'],
  ['霊', '1458'],
  ['門', '452'],
  ['問', '64'],
  ['聞', '319'],
  ['間', '33'],
  ['簡', '983'],
  ['関', '70'],
  ['閑', '1994'],
  ['開', '59'],
  ['閉', '951'],
  ['閲', '1855'],
  ['悦', '1762'],
  ['闘', '751'],
  ['閥', '1072'],
  ['伐', '1816'],
  ['欠', '860'],
  ['歌', '519'],
  ['冗', '1782'],
  ['写', '453'],
  ['与', '308'],
  ['軍', '189'],
  ['宗', '997'],
  ['示', '237'],
  ['宮', '367'],
  ['呂', '2055'],
  ['宅', '357'],
  ['託', '1021'],
  ['宇', '883'],
  ['宙', '1005'],
  ['抽', '1437'],
  ['室', '550'],
  ['宴', '1675'],
  ['富', '644'],
  ['密', '815'],
  ['蜜', '2203'],
  ['宝', '1139'],
  ['玉', '737'],
  ['寧', '1697'],
  ['宜', '1766'],
  ['完', '595'],
  ['元', '192'],
  ['頑', '1247'],
  ['冠', '1503'],
  ['官', '230'],
  ['館', '613'],
  ['管', '517'],
  ['寒', '1456'],
  ['寛', '1377'],
  ['安', '144'],
  ['案', '206'],
  ['審', '412'],
  ['宰', '1597'],
  ['辛', '1607'],
  ['辞', '633'],
  ['幸', '786'],
  ['報', '167'],
  ['執', '800'],
  ['丸', '542'],
  ['宣', '695'],
  ['実', '68'],
  ['害', '358'],
  ['塞', '2500'],
  ['字', '485'],
  ['穴', '1366'],
  ['寂', '1599'],
  ['究', '368'],
  ['空', '304'],
  ['突', '521'],
  ['窓', '1186'],
  ['窮', '1756'],
  ['学', '63'],
  ['覚', '710'],
  ['営', '303'],
  ['栄', '920'],
  ['労', '398'],
  ['巣', '1588'],
  ['挙', '257'],
  ['誉', '1064'],
  ['厳', '638'],
  ['敢', '1859'],
  ['愛', '640'],
  ['曖', '2500'],
  ['妥', '1102'],
  ['当', '91'],
  ['党', '39'],
  ['堂', '1010'],
  ['常', '293'],
  ['吊', '2475'],
  ['掌', '1757'],
  ['尚', '1531'],
  ['向', '182'],
  ['卒', '772'],
  ['率', '383'],
  ['喪', '885'],
  ['育', '369'],
  ['棄', '901'],
  ['豪', '1104'],
  ['享', '1893'],
  ['哀', '1715'],
  ['衰', '1432'],
  ['圧', '718'],
  ['灰', '1717'],
  ['厄', '2123'],
  ['厚', '768'],
  ['歴', '632'],
  ['暦', '1765'],
  ['店', '378'],
  ['床', '1175'],
  ['廊', '1598'],
  ['郎', '569'],
  ['朗', '1374'],
  ['庫', '852'],
  ['席', '370'],
  ['座', '588'],
  ['挫', '1869'],
  ['麻', '1142'],
  ['摩', '1252'],
  ['磨', '1608'],
  ['腐', '1225'],
  ['肉', '986'],
  ['府', '170'],
  ['付', '322'],
  ['符', '1798'],
  ['附', '2396'],
  ['応', '266'],
  ['庶', '1558'],
  ['序', '1160'],
  ['庵', '2119'],
  ['康', '760'],
  ['廃', '698'],
  ['発', '32'],
  ['鹿', '957'],
  ['麗', '1758'],
  ['慶', '1300'],
  ['症', '1111'],
  ['証', '306'],
  ['疾', '1577'],
  ['嫉', '2317'],
  ['疲', '1263'],
  ['皮', '1092'],
  ['被', '431'],
  ['彼', '648'],
  ['披', '1438'],
  ['痴', '1663'],
  ['知', '205'],
  ['智', '1002'],
  ['癌', '2233'],
  ['虎', '1653'],
  ['虐', '1464'],
  ['虚', '1454'],
  ['慮', '916'],
  ['虜', '1678'],
  ['膚', '1679'],
  ['屋', '616'],
  ['尻', '1692'],
  ['尼', '1844'],
  ['尾', '875'],
  ['毛', '1179'],
  ['尿', '1672'],
  ['届', '939'],
  ['局', '286'],
  ['尽', '1234'],
  ['展', '352'],
  ['属', '912'],
  ['履', '1619'],
  ['戸', '575'],
  ['所', '221'],
  ['戻', '890'],
  ['肩', '1215'],
  ['扇', '1805'],
  ['企', '278'],
  ['全', '75'],
  ['傘', '1694'],
  ['合', '41'],
  ['今', '49'],
  ['吟', '1956'],
  ['琴', '1591'],
  ['含', '466'],
  ['命', '465'],
  ['寺', '879'],
  ['時', '16'],
  ['侍', '1939'],
  ['詩', '1196'],
  ['持', '119'],
  ['待', '391'],
  ['特', '234'],
  ['等', '798'],
  ['魚', '1208'],
  ['鮎', '2201'],
  ['鯉', '2369'],
  ['鯛', '2446'],
  ['鮭', '2477'],
  ['鮫', '2244'],
  ['鯨', '1486'],
  ['鮮', '355'],
  ['漁', '1094'],
  ['虫', '1351'],
  ['蝶', '2011'],
  ['蜂', '2223'],
  ['蚊', '2121'],
  ['蛇', '1721'],
  ['融', '481'],
  ['蛮', '2339'],
  ['蟹', '2417'],
  ['独', '365'],
  ['狩', '1785'],
  ['守', '457'],
  ['猟', '1851'],
  ['狙', '745'],
  ['祖', '1226'],
  ['組', '204'],
  ['粗', '1689'],
  ['阻', '1280'],
  ['猛', '1301'],
  ['狂', '1425'],
  ['獲', '964'],
  ['穫', '1642'],
  ['犯', '874'],
  ['獄', '1529'],
  ['猫', '1702'],
  ['苗', '1713'],
  ['描', '876'],
  ['猿', '1772'],
  ['獅', '1914'],
  ['師', '563'],
  ['猪', '1684'],
  ['著', '849'],
  ['狼', '2129'],
  ['浪', '1508'],
  ['良', '501'],
  ['牛', '1202'],
  ['物', '215'],
  ['勿', '2500'],
  ['事', '18'],
  ['牧', '1360'],
  ['馬', '639'],
  ['駒', '1452'],
  ['騎', '1696'],
  ['奇', '1367'],
  ['綺', '2413'],
  ['寄', '673'],
  ['駅', '724'],
  ['駆', '1033'],
  ['区', '137'],
  ['駄', '1500'],
  ['太', '552'],
  ['騒', '1069'],
  ['驚', '1141'],
  ['鳥', '1043'],
  ['島', '245'],
  ['嶋', '1633'],
  ['鶴', '1369'],
  ['鶏', '1901'],
  ['渓', '2063'],
  ['鳩', '1637'],
  ['鴨', '1797'],
  ['鷹', '1676'],
  ['唯', '1292'],
  ['雄', '669'],
  ['雑', '839'],
  ['離', '555'],
  ['難', '330'],
  ['羽', '748'],
  ['習', '706'],
  ['翌', '1070'],
  ['翼', '1201'],
  ['翻', '1465'],
  ['田', '90'],
  ['男', '240'],
  ['思', '132'],
  ['界', '158'],
  ['介', '617'],
  ['胃', '1647'],
  ['異', '631'],
  ['累', '1662'],
  ['塁', '651'],
  ['畳', '1665'],
  ['画', '199'],
  ['留', '731'],
  ['溜', '2451'],
  ['町', '292'],
  ['頂', '1350'],
  ['庁', '793'],
  ['略', '774'],
  ['鬼', '1557'],
  ['魔', '1514'],
  ['魂', '1748'],
  ['曲', '810'],
  ['典', '1055'],
  ['豊', '762'],
  ['草', '967'],
  ['早', '402'],
  ['芝', '1052'],
  ['之', '1318'],
  ['乏', '1646'],
  ['葉', '414'],
  ['茨', '1203'],
  ['芽', '1691'],
  ['牙', '2067'],
  ['雅', '1192'],
  ['花', '578'],
  ['化', '89'],
  ['貨', '822'],
  ['靴', '1561'],
  ['革', '249'],
  ['華', '1085'],
  ['嘩', '2500'],
  ['茂', '1188'],
  ['葛', '1547'],
  ['菊', '1287'],
  ['藍', '2043'],
  ['蓮', '1839'],
  ['連', '30'],
  ['茸', '2500'],
  ['蘭', '1886'],
  ['欄', '1523'],
  ['菅', '1562'],
  ['芋', '2418'],
  ['茶', '1116'],
  ['菱', '1229'],
  ['陵', '1746'],
  ['藤', '291'],
  ['夢', '943'],
  ['若', '458'],
  ['苦', '623'],
  ['菌', '1586'],
  ['萎', '2500'],
  ['委', '187'],
  ['葬', '754'],
  ['死', '229'],
  ['薦', '1082'],
  ['薬', '702'],
  ['楽', '373'],
  ['蘇', '1968'],
  ['暮', '978'],
  ['墓', '1337'],
  ['募', '809'],
  ['幕', '835'],
  ['芸', '719'],
  ['蓄', '1260'],
  ['畜', '1824'],
  ['糸', '1488'],
  ['維', '643'],
  ['緒', '952'],
  ['暑', '1442'],
  ['署', '725'],
  ['諸', '658'],
  ['紐', '2500'],
  ['線', '382'],
  ['泉', '1086'],
  ['緩', '933'],
  ['繰', '872'],
  ['操', '1016'],
  ['燥', '1819'],
  ['絡', '806'],
  ['落', '420'],
  ['織', '608'],
  ['職', '305'],
  ['識', '496'],
  ['編', '591'],
  ['偏', '1340'],
  ['遍', '1845'],
  ['篇', '2076'],
  ['結', '162'],
  ['縛', '1764'],
  ['薄', '1009'],
  ['博', '794'],
  ['締', '797'],
  ['帝', '1276'],
  ['諦', '2457'],
  ['網', '1194'],
  ['縄', '1075'],
  ['綿', '1495'],
  ['絹', '1916'],
  ['紙', '559'],
  ['氏', '84'],
  ['練', '788'],
  ['細', '537'],
  ['繊', '1451'],
  ['縮', '909'],
  ['宿', '701'],
  ['統', '125'],
  ['綾', '1759'],
  ['継', '743'],
  ['紋', '1519'],
  ['文', '190'],
  ['斎', '1155'],
  ['縦', '1258'],
  ['従', '601'],
  ['絵', '895'],
  ['会', '4'],
  ['総', '129'],
  ['納', '987'],
  ['内', '44'],
  ['純', '1044'],
  ['績', '820'],
  ['責', '598'],
  ['積', '541'],
  ['給', '615'],
  ['約', '94'],
  ['的', '105'],
  ['続', '141'],
  ['絶', '784'],
  ['色', '621'],
  ['終', '256'],
  ['経', '79'],
  ['径', '1435'],
  ['軽', '790'],
  ['茎', '2013'],
  ['縁', '1291'],
  ['索', '1127'],
  ['緊', '677'],
  ['繁', '1198'],
  ['繋', '2500'],
  ['竹', '593'],
  ['築', '821'],
  ['筑', '1530'],
  ['笠', '1499'],
  ['立', '58'],
  ['端', '960'],
  ['篠', '1556'],
  ['笹', '1743'],
  ['世', '135'],
  ['筆', '1132'],
  ['箱', '1357'],
  ['籠', '2500'],
  ['笛', '1928'],
  ['箸', '2156'],
  ['策', '209'],
  ['算', '361'],
  ['範', '1088'],
  ['籍', '907'],
  ['簿', '1358'],
  ['笑', '913'],
  ['筋', '744'],
  ['節', '934'],
  ['米', '61'],
  ['粛', '1549'],
  ['粧', '1545'],
  ['庄', '1693'],
  ['糖', '1471'],
  ['唐', '1727'],
  ['料', '295'],
  ['糧', '1354'],
  ['量', '469'],
  ['粒', '1635'],
  ['私', '242'],
  ['稚', '1560'],
  ['穏', '1535'],
  ['和', '124'],
  ['秩', '1275'],
  ['失', '447'],
  ['稲', '1038'],
  ['穂', '1656'],
  ['種', '461'],
  ['腫', '2145'],
  ['重', '193'],
  ['移', '448'],
  ['秘', '862'],
  ['必', '265'],
  ['利', '203'],
  ['程', '514'],
  ['呈', '1571'],
  ['稽', '2372'],
  ['科', '531'],
  ['秒', '1015'],
  ['称', '985'],
  ['稀', '2232'],
  ['希', '896'],
  ['稿', '1400'],
  ['高', '65'],
  ['季', '842'],
  ['秀', '848'],
  ['乃', '1978'],
  ['釈', '1097'],
  ['尺', '1940'],
  ['石', '342'],
  ['礎', '1224'],
  ['碑', '1792'],
  ['卑', '2003'],
  ['痺', '2500'],
  ['砂', '1146'],
  ['沙', '1897'],
  ['磁', '1686'],
  ['慈', '1811'],
  ['研', '336'],
  ['硬', '1101'],
  ['更', '861'],
  ['砕', '1579'],
  ['確', '252'],
  ['磯', '1444'],
  ['碁', '1609'],
  ['山', '131'],
  ['仙', '1157'],
  ['峰', '1836'],
  ['逢', '2116'],
  ['縫', '1723'],
  ['岳', '1334'],
  ['丘', '1405'],
  ['峠', '1941'],
  ['上', '35'],
  ['下', '97'],
  ['岩', '787'],
  ['炭', '1307'],
  ['岸', '556'],
  ['嵐', '1910'],
  ['風', '558'],
  ['崩', '778'],
  ['萌', '2346'],
  ['崇', '1970'],
  ['崎', '533'],
  ['埼', '971'],
  ['岬', '1972'],
  ['甲', '1073'],
  ['皿', '1812'],
  ['盤', '881'],
  ['般', '649'],
  ['搬', '1664'],
  ['盆', '1654'],
  ['蓋', '2388'],
  ['益', '674'],
  ['盗', '1051'],
  ['盟', '587'],
  ['明', '67'],
  ['血', '832'],
  ['衆', '450'],
  ['寸', '1669'],
  ['対', '34'],
  ['耐', '1295'],
  ['封', '1143'],
  ['専', '506'],
  ['寿', '1245'],
  ['尊', '1181'],
  ['辱', '1769'],
  ['導', '354'],
  ['道', '207'],
  ['首', '98'],
  ['尋', '1398'],
  ['大', '7'],
  ['奈', '841'],
  ['奪', '974'],
  ['奮', '1521'],
  ['臭', '1760'],
  ['奥', '1018'],
  ['契', '898'],
  ['奨', '1445'],
  ['将', '634'],
  ['醤', '2485'],
  ['犬', '1326'],
  ['状', '298'],
  ['献', '637'],
  ['獣', '1714'],
  ['食', '328'],
  ['飯', '1046'],
  ['反', '191'],
  ['板', '926'],
  ['坂', '865'],
  ['販', '627'],
  ['阪', '503'],
  ['版', '802'],
  ['片', '1076'],
  ['餓', '1754'],
  ['我', '829'],
  ['飲', '969'],
  ['飾', '1193'],
  ['即', '1167'],
  ['既', '1081'],
  ['餅', '2152'],
  ['餌', '2277'],
  ['餃', '2500'],
  ['飴', '2500'],
  ['角', '805'],
  ['触', '904'],
  ['解', '176'],
  ['争', '271'],
  ['危', '606'],
  ['負', '443'],
  ['亀', '1353'],
  ['幌', '1309'],
  ['光', '527'],
  ['帽', '1742'],
  ['冒', '1317'],
  ['幡', '1948'],
  ['番', '348'],
  ['藩', '1896'],
  ['帆', '1923'],
  ['凡', '1730'],
  ['幣', '1803'],
  ['装', '657'],
  ['壮', '1657'],
  ['荘', '1489'],
  ['製', '488'],
  ['制', '108'],
  ['裂', '1041'],
  ['列', '927'],
  ['烈', '1397'],
  ['襲', '1130'],
  ['剣', '1305'],
  ['検', '290'],
  ['験', '410'],
  ['険', '707'],
  ['刺', '1031'],
  ['割', '318'],
  ['剥', '2383'],
  ['刈', '1738'],
  ['削', '814'],
  ['別', '214'],
  ['刻', '866'],
  ['剰', '1448'],
  ['乗', '377'],
  ['判', '197'],
  ['半', '224'],
  ['伴', '886'],
  ['刷', '1352'],
  ['創', '741'],
  ['倉', '1114'],
  ['槍', '2261'],
  ['劇', '662'],
  ['帰', '504'],
  ['弓', '1802'],
  ['弦', '1773'],
  ['玄', '1409'],
  ['幻', '1564'],
  ['引', '218'],
  ['強', '112'],
  ['弾', '853'],
  ['単', '586'],
  ['弥', '1687'],
  ['張', '403'],
  ['長', '12'],
  ['帳', '1459'],
  ['弱', '958'],
  ['裁', '269'],
  ['載', '825'],
  ['栽', '1496'],
  ['戴', '2332'],
  ['歳', '269'],
  ['年', '6'],
  ['威', '1103'],
  ['戚', '2500'],
  ['戯', '1880'],
  ['殺', '581'],
  ['殴', '1622'],
  ['欧', '421'],
  ['殿', '1199'],
  ['殻', '1892'],
  ['穀', '1744'],
  ['又', '1874'],
  ['収', '337'],
  ['双', '1029'],
  ['力', '62'],
  ['幼', '1227'],
  ['勉', '1066'],
  ['免', '1080'],
  ['励', '1254'],
  ['勤', '830'],
  ['劣', '1620'],
  ['勢', '260'],
  ['夕', '924'],
  ['多', '139'],
  ['外', '81'],
  ['残', '380'],
  ['殉', '2080'],
  ['旬', '1162'],
  ['匹', '1384'],
  ['医', '437'],
  ['矢', '1294'],
  ['短', '689'],
  ['匠', '1718'],
  ['凶', '1673'],
  ['幽', '1996'],
  ['工', '299'],
  ['項', '884'],
  ['功', '857'],
  ['攻', '532'],
  ['巧', '1537'],
  ['江', '704'],
  ['虹', '2110'],
  ['紅', '1299'],
  ['貢', '956'],
  ['隊', '605'],
  ['陣', '828'],
  ['随', '1396'],
  ['陛', '1429'],
  ['院', '150'],
  ['陳', '1323'],
  ['陽', '1071'],
  ['揚', '1316'],
  ['隆', '1109'],
  ['隣', '1083'],
  ['陸', '736'],
  ['隔', '1382'],
  ['降', '596'],
  ['際', '183'],
  ['祭', '1124'],
  ['陥', '1154'],
  ['隙', '2500'],
  ['隠', '1089'],
  ['陰', '1393'],
  ['障', '742'],
  ['章', '990'],
  ['彰', '1310'],
  ['除', '594'],
  ['徐', '1470'],
  ['阿', '1126'],
  ['陶', '1680'],
  ['缶', '1543'],
  ['階', '513'],
  ['皆', '1267'],
  ['邦', '654'],
  ['部', '36'],
  ['郡', '965'],
  ['君', '947'],
  ['群', '1012'],
  ['都', '123'],
  ['那', '1621'],
  ['邪', '1612'],
  ['郵', '917'],
  ['郭', '1670'],
  ['改', '147'],
  ['教', '166'],
  ['政', '17'],
  ['正', '143'],
  ['数', '148'],
  ['赦', '1868'],
  ['敏', '1042'],
  ['散', '758'],
  ['敷', '1212'],
  ['故', '612'],
  ['古', '509'],
  ['枯', '1749'],
  ['致', '870'],
  ['至', '996'],
  ['了', '792'],
  ['久', '688'],
  ['天', '512'],
  ['甘', '1248'],
  ['来', '102'],
  ['再', '275'],
  ['商', '413'],
  ['卵', '1342'],
  ['乳', '1289'],
  ['興', '734'],
  ['𠮟', '2500'],
  ['且', '2500'],
  ['丙', '2500'],
  ['丼', '2088'],
  ['乞', '2478'],
  ['伎', '2500'],
  ['但', '2404'],
  ['侮', '2004'],
  ['侶', '2500'],
  ['俸', '1834'],
  ['倣', '2454'],
  ['倹', '2479'],
  ['傲', '2500'],
  ['僅', '2500'],
  ['冥', '2349'],
  ['冶', '2500'],
  ['准', '1441'],
  ['凸', '2143'],
  ['凹', '2206'],
  ['刹', '2500'],
  ['剖', '1918'],
  ['剝', '2500'],
  ['劾', '2085'],
  ['勃', '2500'],
  ['勅', '2157'],
  ['勲', '1513'],
  ['勾', '2500'],
  ['匿', '2024'],
  ['升', '2077'],
  ['卸', '1520'],
  ['厘', '1835'],
  ['叔', '1950'],
  ['叙', '1954'],
  ['吏', '2500'],
  ['咽', '2500'],
  ['哺', '2461'],
  ['唆', '1278'],
  ['唾', '2500'],
  ['喝', '1858'],
  ['喩', '2500'],
  ['嗅', '2480'],
  ['嗣', '2310'],
  ['嘱', '1903'],
  ['嘲', '2500'],
  ['嚇', '2141'],
  ['坑', '2040'],
  ['坪', '1823'],
  ['堆', '2184'],
  ['堕', '2087'],
  ['塑', '2500'],
  ['塡', '2500'],
  ['墜', '1466'],
  ['墾', '2500'],
  ['壌', '1407'],
  ['壱', '2351'],
  ['奔', '1884'],
  ['妬', '2500'],
  ['娯', '1827'],
  ['婆', '2435'],
  ['媛', '1735'],
  ['嫡', '2130'],
  ['宛', '2500'],
  ['宵', '2262'],
  ['寡', '2035'],
  ['屯', '1980'],
  ['巾', '2500'],
  ['帥', '2016'],
  ['庸', '2038'],
  ['廉', '2066'],
  ['弄', '2500'],
  ['弊', '1750'],
  ['弐', '2500'],
  ['弔', '1840'],
  ['弧', '2371'],
  ['怨', '2137'],
  ['恣', '2325'],
  ['恭', '1737'],
  ['悠', '1921'],
  ['惧', '2097'],
  ['惰', '2336'],
  ['愁', '2171'],
  ['慄', '2500'],
  ['慕', '2100'],
  ['慨', '1875'],
  ['憬', '2500'],
  ['憾', '1682'],
  ['抄', '2328'],
  ['拉', '2500'],
  ['拐', '1498'],
  ['拭', '2421'],
  ['捗', '2500'],
  ['捻', '2500'],
  ['搾', '2046'],
  ['摯', '2170'],
  ['斑', '2165'],
  ['斗', '1885'],
  ['斤', '2500'],
  ['斥', '2231'],
  ['旺', '2342'],
  ['暁', '1924'],
  ['朕', '2500'],
  ['朽', '1891'],
  ['枢', '1791'],
  ['栓', '2199'],
  ['桁', '2500'],
  ['桟', '2093'],
  ['梗', '2500'],
  ['棺', '2161'],
  ['椎', '1911'],
  ['楷', '2500'],
  ['楼', '2173'],
  ['款', '1854'],
  ['毀', '2500'],
  ['氾', '2500'],
  ['汎', '2014'],
  ['汰', '2500'],
  ['沃', '2500'],
  ['泌', '2112'],
  ['淑', '1922'],
  ['淫', '2500'],
  ['渇', '1944'],
  ['溺', '2500'],
  ['滋', '1563'],
  ['漆', '1971'],
  ['漸', '2115'],
  ['濫', '2500'],
  ['煎', '2458'],
  ['煩', '2081'],
  ['爵', '2500'],
  ['爽', '2333'],
  ['猶', '1799'],
  ['玩', '2216'],
  ['瑠', '2352'],
  ['璃', '2500'],
  ['璽', '2500'],
  ['畏', '2389'],
  ['畔', '2049'],
  ['畝', '2327'],
  ['畿', '1683'],
  ['痘', '2500'],
  ['痢', '2037'],
  ['痩', '2500'],
  ['瘍', '2500'],
  ['眉', '2177'],
  ['睦', '1993'],
  ['瞭', '2500'],
  ['矯', '2105'],
  ['硝', '2154'],
  ['硫', '1867'],
  ['礁', '1977'],
  ['禍', '2010'],
  ['租', '2089'],
  ['窃', '1871'],
  ['窒', '1776'],
  ['窯', '2072'],
  ['箋', '2500'],
  ['篤', '1942'],
  ['糾', '1820'],
  ['紡', '1876'],
  ['紺', '1825'],
  ['綻', '2500'],
  ['緻', '2500'],
  ['繕', '2195'],
  ['繭', '2495'],
  ['罵', '2467'],
  ['罷', '2104'],
  ['羞', '2500'],
  ['羨', '2500'],
  ['翁', '2064'],
  ['耗', '2500'],
  ['肘', '2500'],
  ['脊', '2299'],
  ['腎', '1755'],
  ['腺', '2500'],
  ['膳', '2120'],
  ['臆', '2500'],
  ['臼', '2048'],
  ['舶', '1753'],
  ['舷', '2500'],
  ['艶', '2207'],
  ['芯', '2202'],
  ['苛', '2500'],
  ['蔑', '2483'],
  ['蔽', '2500'],
  ['薪', '2182'],
  ['薫', '1849'],
  ['藻', '2124'],
  ['虞', '2500'],
  ['蚕', '2272'],
  ['蛍', '2031'],
  ['衷', '2229'],
  ['褐', '2186'],
  ['訃', '2379'],
  ['詔', '2239'],
  ['詣', '2500'],
  ['詮', '2500'],
  ['諧', '2500'],
  ['諮', '1345'],
  ['謁', '2500'],
  ['謄', '2295'],
  ['謹', '2068'],
  ['貌', '2500'],
  ['貪', '2500'],
  ['賂', '2500'],
  ['賄', '1282'],
  ['賓', '1677'],
  ['賜', '2190'],
  ['賠', '1243'],
  ['踪', '2500'],
  ['轄', '1771'],
  ['辣', '2500'],
  ['迅', '1888'],
  ['迭', '1907'],
  ['逐', '2230'],
  ['逓', '1957'],
  ['逝', '2018'],
  ['遜', '2500'],
  ['遡', '2500'],
  ['遵', '2500'],
  ['遷', '1937'],
  ['酌', '2271'],
  ['酎', '2500'],
  ['酪', '2012'],
  ['醒', '2500'],
  ['醸', '1838'],
  ['采', '2500'],
  ['鋳', '2005'],
  ['錬', '2221'],
  ['錮', '2500'],
  ['阜', '1532'],
  ['陪', '1917'],
  ['隷', '2009'],
  ['隻', '1546'],
  ['韻', '2148'],
  ['頒', '2287'],
  ['頓', '2500'],
  ['頰', '2500'],
  ['顎', '2500'],
  ['骸', '2500'],
  ['髄', '1652'],
  ['鬱', '2500'],
  ['麓', '2366'],
]

const kanjiPopularity = Object.fromEntries(kanjiPopularityRaw)
export const getKanjiPopularity = (kanji: string) => kanjiPopularity[kanji] || null
