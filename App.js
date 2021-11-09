import React from 'react';
import {FlatList, StyleSheet, View, Text, Image, ImageBackground, TouchableOpacity} from "react-native";
import {createAppContainer} from "react-navigation";
import {createStackNavigator} from "react-navigation-stack";
import { ScrollView } from 'react-native-gesture-handler';

const getRandom = (min, max) => Math.floor(Math.random() * (max - min) + min);
var index =10
var num = 0
var maptype = ""
var sen = ""

class Main extends React.Component {
  static navigationOptions = {
    title: "Main Page"
  };
  
  render() {
   const {navigate} = this.props.navigation;
    return (
      <ScrollView>
      <View style={[styles.group, styles.group_layout]}>
        <View style={[styles.flex, styles.flex_layout]}>
          <View style={styles.flex_row}>
            <View style={[styles.highlights_box, styles.highlights_box_layout]}>
              <Text style={styles.highlights} ellipsizeMode={'clip'}>
                {'!숙대생을 위한 식당 추천 어플!'}
              </Text>
            </View>
          </View>
          <View style={styles.flex_row}>
            <ImageBackground
              style={[styles.img, styles.img_layout]}
              source={require('./src/assets/logo.png')}
            />
          </View>
          <View style={styles.flex_row}>
          <TouchableOpacity style = {[styles.content_box, styles.content_box_layout]}
          onPress={() => navigate("MealCategory")}>
              <View style={styles.content_box_space} />
              <View style={styles.content_box_col}>
                <View style={[styles.meal_box, styles.meal_box_layout]}>
                  <Text style={styles.meal} ellipsizeMode={'clip'}>
                    {'MEAL'}
                  </Text>
                </View>
              </View>
              <View style={styles.content_box_space1} />
              <View style={styles.content_box_col1}>
                <ImageBackground
                  style={[styles.img, styles.img_layout1]}
                  source={require('./src/assets/meal.png')}
                />
              </View>
              </TouchableOpacity>
          </View>
          <View style={styles.flex_row}>
            <View style={[styles.flex1, styles.flex1_layout]}>
              <View style={styles.flex1_col}>
                <TouchableOpacity style = {[styles.content_box1, styles.content_box1_layout]}
                onPress={() => navigate("Alcohol")}>
                  <View style={styles.content_box1_space} />
                  <View style={styles.content_box1_col}>
                    <View style={[styles.alcohol_box, styles.alcohol_box_layout]}>
                      <Text style={styles.alcohol} ellipsizeMode={'clip'}>
                        {'Alcohol'}
                      </Text>
                    </View>
                  </View>
                  <View style={styles.content_box1_space1} />
                  <View style={styles.content_box1_col1}>
                    <ImageBackground
                      style={[styles.img, styles.img_layout2]}
                      source={require('./src/assets/wine.png')}
                    />
                  </View>
                  </TouchableOpacity>
                </View>
              <View style={styles.flex1_space} />
              <View style={styles.flex1_col}>
                <TouchableOpacity style = {[styles.content_box2, styles.content_box2_layout]}
                onPress={() => navigate("Dessert")}>
                  <View style={styles.content_box2_space} />
                  <View style={styles.content_box2_col}>
                    <View style={[styles.dessert_box, styles.dessert_box_layout]}>
                      <Text style={styles.dessert} ellipsizeMode={'clip'}>
                        {'Dessert'}
                      </Text>
                    </View>
                  </View>
                  <View style={styles.content_box2_space1} />
                  <View style={styles.content_box2_col1}>
                    <ImageBackground
                      style={[styles.icon, styles.icon_layout]}
                      source={require('./src/assets/dessert.png')}
                    />
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.flex_row}>
            <View
              style={[styles.cover_group, styles.cover_group_layout]}>
              <View
                style={[styles.medium_title_box, styles.medium_title_box_layout]}>
                <Text style={styles.medium_title1} ellipsizeMode={'clip'}>
                  {'# 별점 5점 맛집 모음'}
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.flex_row}>
            <View style={[styles.cover_group1, styles.cover_group1_layout]}>
              <View
                style={[
                  styles.medium_title_box,
                  styles.medium_title_box_layout1
                ]}>
                <Text style={styles.medium_title2} ellipsizeMode={'clip'}>
                  {'# 우리팀 너무 짱이야'}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
     </ScrollView>
    );
  }
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
const category = ["한식", "양식", "일식", "중식", "아시아", "분식", "샐러드", "샌드위치", "고기"];

class MealCategory extends React.Component{
  static navigationOptions = {
    title: "MealCategory"
  };

  
  render() {
   const {navigate} = this.props.navigation;
   index = getRandom(0,8)
    return (
    <ScrollView>
    <View style={[styles.mc_group, styles.mc_group_layout]}>
      <View style={[styles.a_flex, styles.a_flex_layout]}>
        <View style={styles.a_flex_row}>
        <View style={[styles.mp_main_box, styles.mp_main_box_layout]}>
                  <Text style={styles.mp_main} ellipsizeMode={'clip'}>
                    {'이건 어때요?'}
                  </Text>
                  </View>
                  <View style={[styles.mc_flex_1, styles.mc_flex_1_layout]}>
                  </View>
          <ImageBackground source={require('./src/assets/circleY.png')} 
          style={[styles.mc_img, styles.mc_img_layout]}>
            <View style = {{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
              <Text style = {styles.meal}>
                {category[index]}
              </Text>
            </View>
          </ImageBackground>
        <View style={styles.mc_flex_row1}>
          <View style={[styles.mc_group1, styles.mc_group1_layout]}>
            <TouchableOpacity
              style={[styles.mc_medium_title_box, styles.mc_medium_title_box_layout]}
              onPress={() => navigate("Meal")}>
              <Text style={styles.mc_medium_title1} ellipsizeMode={'clip'}>
                {"식당 추천해줘요!"}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.mc_flex_row2}>
          <View style={[styles.mc_group2, styles.mc_group2_layout]}>
            <TouchableOpacity
              style={[styles.mc_medium_title_box, styles.mc_medium_title_box_layout]}
              onPress={() => navigate("MealCategory", {name: "MealCategory"})}>
              <Text style={styles.mc_medium_title2} ellipsizeMode={'clip'}>
                {"다시하기!"}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      </View>
     </View>
    </ScrollView>
    );
  }
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////

const KoFood = ["음식미담", "설쌈냉면", "더함", "한입소반", "까치네", "본죽", "길목식당", "백채 김치찌개", "육쌈냉면", "갯마을 칼국수", "뜸들이다"]
const WeFood = ["비일", "피자 보이시나", "라리에또", "버거인", "마시바시", "피굽남", "피자헛"]
const JaFood = ["타타미", "고씨네", "작은도쿄", "미스터카츠", "츄르츄르", "브라운돈가스", "어바웃샤브", "가문의 우동", "타코비", "닌자초밥"]
const ChFood = ["홍콩반점", "정", "라화쿵부", "탕화쿵푸", "신룽푸", "홍짜장", "샤오촨"]
const AsFood = ["포라임", "포36거리", "신머이", "리또리또", "베나레스", "미호식당"]
const SNFood = ["빨봉분식", "오며가며", "선다래", "달볶이", "와우신내떡", "지지고", "아리랑노점", "또와또", "베스트프렌드", "두끼", "버스컵 떡볶이", "빨강 떡볶이", "종로김밥"]
const Salad = ["샐러디", "요거몬스터", "땡스그린", "몬스터 플레이스", "그린그릭", "샐러드로우 앤트라타"]
const Sandwich = ["써브웨이", "베이글 팩토리", "이삭토스트", "숙대앞 맛있는 샌드위치"]
const Meat = ["부암동 치킨", "내가찜한닭", "고수찜닭", "조대포", "홍곱창", "쌍대포 소금구이", "굴다리 소곱창", "청파닭꼬치", "해바라기 정육식당", "왈가닥", "노랑통닭", "대관령목장"]

  const KoImg = [{id:0, src:require('./src/assets/image/101.png')}, {id:1, src:require('./src/assets/image/102.png')}, {id:2, src:require('./src/assets/image/103.png')}, {id:3, src:require('./src/assets/image/104.png')}, {id:4, src:require('./src/assets/image/105.png')}, {id:5, src:require('./src/assets/image/106.png')}, {id:6, src:require('./src/assets/image/107.png')}, {id:6, src:require('./src/assets/image/108.png')}, {id:7, src:require('./src/assets/image/109.png')}, {id:8, src:require('./src/assets/image/110.png')}, {id:9, src:require('./src/assets/image/111.png')}]
  const WeImg = [{id:0, src:require('./src/assets/image/94.png')},{id:1, src:require('./src/assets/image/95.png')},{id:2, src:require('./src/assets/image/96.png')}, {id:3, src:require('./src/assets/image/97.png')},{id:4, src:require('./src/assets/image/98.png')} ,{id:5, src:require('./src/assets/image/99.png')} ,{id:6, src:require('./src/assets/image/100.png')}]
  const JaImg = [{id:0, src:require('./src/assets/image/84.png')},{id:1, src:require('./src/assets/image/85.png')},{id:2, src:require('./src/assets/image/86.png')}, {id:3, src:require('./src/assets/image/87.png')},{id:4, src:require('./src/assets/image/88.png')} ,{id:5, src:require('./src/assets/image/89.png')} ,{id:6, src:require('./src/assets/image/90.png')}, {id:7, src:require('./src/assets/image/91.png')}, {id:8, src:require('./src/assets/image/92.png')},{id:9, src:require('./src/assets/image/93.png')}]
  const ChImg = [{id:0, src:require('./src/assets/image/77.png')},{id:1, src:require('./src/assets/image/78.png')},{id:2, src:require('./src/assets/image/79.png')}, {id:3, src:require('./src/assets/image/80.png')},{id:4, src:require('./src/assets/image/81.png')} ,{id:5, src:require('./src/assets/image/82.png')} ,{id:6, src:require('./src/assets/image/83.png')}]
    const AsImg = [{id:0, src:require('./src/assets/image/71.png')},{id:1, src:require('./src/assets/image/72.png')},{id:2, src:require('./src/assets/image/73.png')}, {id:3, src:require('./src/assets/image/74.png')},{id:4, src:require('./src/assets/image/75.png')} ,{id:5, src:require('./src/assets/image/76.png')}]
    const SNImg = [{id:0, src:require('./src/assets/image/58.png')},{id:1, src:require('./src/assets/image/59.png')},{id:2, src:require('./src/assets/image/60.png')}, {id:3, src:require('./src/assets/image/61.png')},{id:4, src:require('./src/assets/image/62.png')} ,{id:5, src:require('./src/assets/image/63.png')},{id:6, src:require('./src/assets/image/64.png')}, {id:7, src:require('./src/assets/image/65.png')}, {id:8, src:require('./src/assets/image/66.png')},{id:9, src:require('./src/assets/image/67.png')},{id:10, src:require('./src/assets/image/68.png')},{id:11, src:require('./src/assets/image/69.png')},{id:12, src:require('./src/assets/image/70.png')}]
  const SaladImg = [{id:0, src:require('./src/assets/image/52.png')},{id:1, src:require('./src/assets/image/53.png')},{id:2, src:require('./src/assets/image/54.png')}, {id:3, src:require('./src/assets/image/55.png')},{id:4, src:require('./src/assets/image/56.png')} ,{id:5, src:require('./src/assets/image/57.png')}]
  const SandwichImg = [{id:0, src:require('./src/assets/image/48.png')},{id:1, src:require('./src/assets/image/49.png')},{id:2, src:require('./src/assets/image/50.png')}, {id:3, src:require('./src/assets/image/51.png')}]
  const MeatImg =[{id:0, src:require('./src/assets/image/36.png')},{id:1, src:require('./src/assets/image/37.png')},{id:2, src:require('./src/assets/image/38.png')}, {id:3, src:require('./src/assets/image/39.png')},{id:4, src:require('./src/assets/image/40.png')} ,{id:5, src:require('./src/assets/image/41.png')},{id:6, src:require('./src/assets/image/42.png')}, {id:7, src:require('./src/assets/image/43.png')}, {id:8, src:require('./src/assets/image/44.png')},{id:9, src:require('./src/assets/image/45.png')},{id:10, src:require('./src/assets/image/46.png')},{id:11, src:require('./src/assets/image/47.png')}]

  const KoImgMap = [{id:0, src:require('./src/assets/map/101.png')}, {id:1, src:require('./src/assets/map/102.png')}, {id:2, src:require('./src/assets/map/103.png')}, {id:3, src:require('./src/assets/map/104.png')}, {id:4, src:require('./src/assets/map/105.png')}, {id:5, src:require('./src/assets/map/106.png')}, {id:6, src:require('./src/assets/map/107.png')}, {id:6, src:require('./src/assets/map/108.png')}, {id:7, src:require('./src/assets/map/109.png')}, {id:8, src:require('./src/assets/map/110.png')}, {id:9, src:require('./src/assets/map/111.png')}]
  const WeImgMap = [{id:0, src:require('./src/assets/map/94.png')},{id:1, src:require('./src/assets/map/95.png')},{id:2, src:require('./src/assets/map/96.png')}, {id:3, src:require('./src/assets/map/97.png')},{id:4, src:require('./src/assets/map/98.png')} ,{id:5, src:require('./src/assets/map/99.png')} ,{id:6, src:require('./src/assets/map/100.png')}]
  const JaImgMap = [{id:0, src:require('./src/assets/map/84.png')},{id:1, src:require('./src/assets/map/85.png')},{id:2, src:require('./src/assets/map/86.png')}, {id:3, src:require('./src/assets/map/87.png')},{id:4, src:require('./src/assets/map/88.png')} ,{id:5, src:require('./src/assets/map/89.png')} ,{id:6, src:require('./src/assets/map/90.png')}, {id:7, src:require('./src/assets/map/91.png')}, {id:8, src:require('./src/assets/map/92.png')},{id:9, src:require('./src/assets/map/93.png')}]
  const ChImgMap = [{id:0, src:require('./src/assets/map/77.png')},{id:1, src:require('./src/assets/map/78.png')},{id:2, src:require('./src/assets/map/79.png')}, {id:3, src:require('./src/assets/map/80.png')},{id:4, src:require('./src/assets/map/81.png')} ,{id:5, src:require('./src/assets/map/82.png')} ,{id:6, src:require('./src/assets/map/83.png')}]
  const AsImgMap = [{id:0, src:require('./src/assets/map/71.png')},{id:1, src:require('./src/assets/map/72.png')},{id:2, src:require('./src/assets/map/73.png')}, {id:3, src:require('./src/assets/map/74.png')},{id:4, src:require('./src/assets/map/75.png')} ,{id:5, src:require('./src/assets/map/76.png')}]
  const SNImgMap = [{id:0, src:require('./src/assets/map/58.png')},{id:1, src:require('./src/assets/map/59.png')},{id:2, src:require('./src/assets/map/60.png')}, {id:3, src:require('./src/assets/map/61.png')},{id:4, src:require('./src/assets/map/62.png')} ,{id:5, src:require('./src/assets/map/63.png')},{id:6, src:require('./src/assets/map/64.png')}, {id:7, src:require('./src/assets/map/65.png')}, {id:8, src:require('./src/assets/map/66.png')},{id:9, src:require('./src/assets/map/67.png')},{id:10, src:require('./src/assets/map/68.png')},{id:11, src:require('./src/assets/map/69.png')},{id:12, src:require('./src/assets/map/70.png')}]
  const SaladImgMap = [{id:0, src:require('./src/assets/map/52.png')},{id:1, src:require('./src/assets/map/53.png')},{id:2, src:require('./src/assets/map/54.png')}, {id:3, src:require('./src/assets/map/55.png')},{id:4, src:require('./src/assets/map/56.png')} ,{id:5, src:require('./src/assets/map/57.png')}]
  const SandwichImgMap = [{id:0, src:require('./src/assets/map/48.png')},{id:1, src:require('./src/assets/map/49.png')},{id:2, src:require('./src/assets/map/50.png')}, {id:3, src:require('./src/assets/map/51.png')}]
  const MeatImgMap =[{id:0, src:require('./src/assets/map/36.png')},{id:1, src:require('./src/assets/map/37.png')},{id:2, src:require('./src/assets/map/38.png')}, {id:3, src:require('./src/assets/map/39.png')},{id:4, src:require('./src/assets/map/40.png')} ,{id:5, src:require('./src/assets/map/41.png')},{id:6, src:require('./src/assets/map/42.png')}, {id:7, src:require('./src/assets/map/43.png')}, {id:8, src:require('./src/assets/map/44.png')},{id:9, src:require('./src/assets/map/45.png')},{id:10, src:require('./src/assets/map/46.png')},{id:11, src:require('./src/assets/map/47.png')}]

class Meal extends React.Component{
  static navigationOptions = {
    title: "Meal"
  };
  
  render() {
   const {navigate} = this.props.navigation;
   var sen=""
   var name=""

    const indexKor = getRandom(0, 10)
    const indexWe = getRandom(0, 6)
    const indexJa = getRandom(0, 9)
    const indexCh = getRandom(0, 6)
    const indexAs = getRandom(0, 6)
    const indexSN = getRandom(0, 12)
    const indexSalad = getRandom(0, 5)
    const indexSandwich = getRandom(0, 3)
    const indexMeat = getRandom(0, 11)

    if (index==0){
      sen = KoFood[indexKor]
      name = KoImg
      num = indexKor
      maptype = KoImgMap
    }
    else if (index==1){
      sen = WeFood[indexWe]
      name = WeImg
      num = indexWe
      maptype = WeImgMap
    }
    else if (index==2){
      sen = JaFood[indexJa]
      name = JaImg
      num = indexJa
      maptype = JaImgMap
    }
    else if (index==3){
      sen = ChFood[indexCh]
      name = ChImg
      num = indexCh
      maptype = ChImgMap
    }
    else if (index==4){
      sen = AsFood[indexAs]
      name = AsImg
      num = indexAs
      maptype = AsImgMap
    }
    else if (index==5){
      sen = SNFood[indexSN]
      name = SNImg
      num = indexSN
      maptype = SNImgMap
    }
    else if (index==6){
      sen = Salad[indexSalad] 
      name = SaladImg
      num = indexSalad
      maptype = SaladImgMap
    }
    else if (index==7){
      sen = Sandwich[indexSandwich]
      name = SandwichImg
      num= indexSandwich
      maptype = SandwichImgMap
    }
    else if (index==8){
      sen = Meat[indexMeat]
      name = MeatImg
      num = indexMeat
      maptype = MeatImgMap
    }


    return (
      <ScrollView>
      <View style={[styles.a_group, styles.a_group_layout]}>
      <View style={[styles.a_flex, styles.a_flex_layout]}>
        <View style={styles.a_flex_row}>
        <View style={[styles.mp_main_box, styles.mp_main_box_layout]}>
                  <Text style={styles.mp_main} ellipsizeMode={'clip'}>
                    {'여긴 어때요?'}
                  </Text>
                  </View>
                  <View style={[styles.mc_flex_1, styles.mc_flex_1_layout]}>
                  </View>
          <ImageBackground source={require('./src/assets/circleY.png')} style={[styles.mc_img, styles.mc_img_layout]}>
            <View style = {{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
              <Text style = {styles.meal}>
                {sen}
              </Text>
            </View>
          </ImageBackground>
        </View>
        <View style={styles.a_flex_row}>
        <Image 
        style={{
            justifyContent: 'center', 
            flexDirection: 'column',
            height: 180,
            width: 180,
            marginLeft: 'auto',
            marginRight: 'auto',
            borderRadius: 10
          }}
          source={name[num].src}
        />
        </View>
        <View style={styles.a_flex_row}>
          <View style={[styles.a_flex1, styles.a_flex1_layout]}>
            <View style={styles.a_flex1_col}>
            <TouchableOpacity
            onPress={() => navigate("Map", {name: "Map"})}>
              <View style={[styles.m_group1, styles.m_group1_layout]}>
                <View style={[styles.m_like_box, styles.m_like_box_layout]}>
                  <Text style={styles.m_like} ellipsizeMode={'clip'}>
                    {'Like'}
                  </Text>
                </View>
              </View>
              </TouchableOpacity>
            </View>
            <View style={styles.m_flex1_space} />
            <View style={styles.m_flex1_col}>
            <TouchableOpacity
            onPress={() => navigate("Meal", {name: "Meal"})}>
              <View style={[styles.m_group2, styles.m_group2_layout]}>
                <View style={[styles.m_dislike_box, styles.m_dislike_box_layout]}>
                  <Text style={styles.m_dislike} ellipsizeMode={'clip'}>
                    {'Dislike'}
                  </Text>
                </View>
              </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      </View>
    </ScrollView>
    );
  }
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////

class Map extends React.Component{
  static navigationOptions = {
    title: "Meal Map"
  };
  
  render() {
   const {navigate} = this.props.navigation;
   return(
    <ScrollView>
    <View style={[styles.mp_content_box, styles.mp_content_box_layout]}>
      <View style={styles.mp_content_box_row}>
                <View style={[styles.cover_group, styles.cover_group_layout]}>
                <View style={[styles.main_box, styles.a_main_box_layout]}>
                </View>
              </View>
        <Image 
        style={{
            justifyContent: 'center', 
            flexDirection: 'column',
            height: 300,
            width: 300,
            marginLeft: 'auto',
            marginRight: 'auto',
            borderRadius: 10
          }}
        source={maptype[num].src}
        />
      <View style={styles.mp_content_box_row}>
              <View style={[styles.mp_cover_group, styles.mp_cover_group_layout]}>
                <TouchableOpacity
            onPress={() => navigate("Main", {name: "Main"})}>
                <View style={[styles.mp_main_box, styles.mp_main_box_layout]}>
                  <Text style={styles.mp_main} ellipsizeMode={'clip'}>
                    {'Press to go Main'}
                  </Text>
                </View>
                </TouchableOpacity>
              </View>
      </View>
    </View>
    </View>
    </ScrollView>
   );
  }
}
///////////////////////////////////
const Alcohollist = ["3km", "이층집 홍홍", "마시앤바시", "이리오너라", "토담", "스튜디오 포비피엠", "역전 할머니 맥주"]

class Alcohol extends React.Component{
  static navigationOptions = {
    title: "Alcohol"
  };
  
  render() {
   const {navigate} = this.props.navigation;
   var sen = ""
   num = getRandom(0, 6)
   sen = Alcohollist[num]
   const AlcoholImg = [{id:0, src:require('./src/assets/image/29.png')}, {id:1, src:require('./src/assets/image/30.png')}, {id:2, src:require('./src/assets/image/31.png')}, {id:3, src:require('./src/assets/image/32.png')}, {id:4, src:require('./src/assets/image/33.png')}, {id:5, src:require('./src/assets/image/34.png')}, {id:6, src:require('./src/assets/image/35.png')}]

   return(
      <ScrollView>
      <View style={[styles.a_group, styles.a_group_layout]}>
      <View style={[styles.a_flex, styles.a_flex_layout]}>
        <View style={styles.a_flex_row}>
        <View style={[styles.mp_main_box, styles.mp_main_box_layout]}>
                  <Text style={styles.mp_main} ellipsizeMode={'clip'}>
                    {'여긴 어때요?'}
                  </Text>
                  </View>
                  <View style={[styles.mc_flex_1, styles.mc_flex_1_layout]}>
                  </View>
          <ImageBackground source={require('./src/assets/circleP.png')} style={[styles.mc_img, styles.mc_img_layout]}>
            <View style = {{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
              <Text style = {styles.meal}>
                {sen}
              </Text>
            </View>
          </ImageBackground>
        </View>
        <View style={styles.a_flex_row}>
        <Image 
        style={{
            justifyContent: 'center', 
            flexDirection: 'column',
            height: 180,
            width: 180,
            marginLeft: 'auto',
            marginRight: 'auto',
            borderRadius: 10
          }}
          source={AlcoholImg[num].src}
        />
        </View>
        <View style={styles.a_flex_row}>
          <View style={[styles.a_flex1, styles.a_flex1_layout]}>
            <View style={styles.a_flex1_col}>
            <TouchableOpacity
            onPress={() => navigate("AlcoholMap", {name: "AlcoholMap"})}>
              <View style={[styles.a_group1, styles.a_group1_layout]}>
                <View style={[styles.m_like_box, styles.m_like_box_layout]}>
                  <Text style={styles.m_like} ellipsizeMode={'clip'}>
                    {'Like'}
                  </Text>
                </View>
              </View>
              </TouchableOpacity>
            </View>
            <View style={styles.m_flex1_space} />
            <View style={styles.m_flex1_col}>
            <TouchableOpacity
            onPress={() => navigate("Alcohol", {name: "Alcohol"})}>
              <View style={[styles.a_group2, styles.a_group2_layout]}>
                <View style={[styles.m_dislike_box, styles.m_dislike_box_layout]}>
                  <Text style={styles.m_dislike} ellipsizeMode={'clip'}>
                    {'Dislike'}
                  </Text>
                </View>
              </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      </View>
    </ScrollView>
   );
  }
}
//////////////////////////////////////////////////////////

class Dessert extends React.Component{
  static navigationOptions = {
    title: "Dessert"
  };
  
  render() {
   const {navigate} = this.props.navigation;
   num = getRandom(0, 27)
    const Dessertlist = ["커피플라넬", "마돈나커피", "가가", "핀벨", "쎄라비", "청파맨션", "공차", "스타벅스", "차얌", "본솔커피", "메르시", "브루다", "카페코지", "베브릿지", "일미오카페", "dear fine", "카페 나리나무", "아마스빈", "카페인중독", "우스블랑", "몽소", "와플하우스", "오빠달걀빵", "띵똥와플", "뽀빠", "한입마카롱", "와플덴", "명량핫도그"]
    const DessertImg =[{id:0, src:require('./src/assets/image/1.png')},{id:1, src:require('./src/assets/image/2.png')},{id:2, src:require('./src/assets/image/3.png')}, {id:3, src:require('./src/assets/image/4.png')},{id:4, src:require('./src/assets/image/5.png')} ,{id:5, src:require('./src/assets/image/6.png')},{id:6, src:require('./src/assets/image/7.png')}, {id:7, src:require('./src/assets/image/24.png')}, {id:8, src:require('./src/assets/image/25.png')},{id:9, src:require('./src/assets/image/26.png')},{id:10, src:require('./src/assets/image/27.png')},{id:11, src:require('./src/assets/image/8.png')},{id:12, src:require('./src/assets/image/9.png')}, {id:13, src:require('./src/assets/image/10.png')}, {id:14, src:require('./src/assets/image/11.png')},{id:15, src:require('./src/assets/image/12.png')},{id:16, src:require('./src/assets/image/13.png')},{id:17, src:require('./src/assets/image/14.png')},{id:18, src:require('./src/assets/image/15.png')}, {id:19, src:require('./src/assets/image/16.png')}, {id:20, src:require('./src/assets/image/17.png')},{id:21, src:require('./src/assets/image/18.png')},{id:22, src:require('./src/assets/image/19.png')},{id:23, src:require('./src/assets/image/20.png')},{id:24, src:require('./src/assets/image/21.png')},{id:25, src:require('./src/assets/image/22.png')},{id:26, src:require('./src/assets/image/23.png')},{id:27, src:require('./src/assets/image/28.png')}]
    const DessertMap =[{id:0, src:require('./src/assets/map/1.png')},{id:1, src:require('./src/assets/map/2.png')},{id:2, src:require('./src/assets/map/3.png')}, {id:3, src:require('./src/assets/map/4.png')},{id:4, src:require('./src/assets/map/5.png')} ,{id:5, src:require('./src/assets/map/6.png')},{id:6, src:require('./src/assets/map/7.png')}, {id:7, src:require('./src/assets/map/24.png')}, {id:8, src:require('./src/assets/map/25.png')},{id:9, src:require('./src/assets/map/26.png')},{id:10, src:require('./src/assets/map/27.png')},{id:11, src:require('./src/assets/map/8.png')},{id:12, src:require('./src/assets/map/9.png')}, {id:13, src:require('./src/assets/map/10.png')}, {id:14, src:require('./src/assets/map/11.png')},{id:15, src:require('./src/assets/map/12.png')},{id:16, src:require('./src/assets/map/13.png')},{id:17, src:require('./src/assets/map/14.png')},{id:18, src:require('./src/assets/map/15.png')}, {id:19, src:require('./src/assets/map/16.png')}, {id:20, src:require('./src/assets/map/17.png')},{id:21, src:require('./src/assets/map/18.png')},{id:22, src:require('./src/assets/map/19.png')},{id:23, src:require('./src/assets/map/20.png')},{id:24, src:require('./src/assets/map/21.png')},{id:25, src:require('./src/assets/map/22.png')},{id:26, src:require('./src/assets/map/23.png')},{id:27, src:require('./src/assets/map/28.png')}]

    sen = Dessertlist[num]
      
   return(
    <ScrollView>
     <View style={[styles.a_group, styles.a_group_layout]}>
      <View style={[styles.a_flex, styles.a_flex_layout]}>
        <View style={styles.a_flex_row}>
        <View style={[styles.mp_main_box, styles.mp_main_box_layout]}>
                  <Text style={styles.mp_main} ellipsizeMode={'clip'}>
                    {'여긴 어때요?'}
                  </Text>
                  </View>
                  <View style={[styles.mc_flex_1, styles.mc_flex_1_layout]}>
                  </View>
          <ImageBackground source={require('./src/assets/circleB.png')} style={[styles.mc_img, styles.mc_img_layout]}>
            <View style = {{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
              <Text style = {styles.meal}>
                {sen}
              </Text>
            </View>
          </ImageBackground>
        </View>
        <View style={styles.a_flex_row}>
        <Image 
        style={{
            justifyContent: 'center', 
            flexDirection: 'column',
            height: 180,
            width: 180,
            marginLeft: 'auto',
            marginRight: 'auto',
            borderRadius: 10
          }}
          source={DessertImg[num].src}
        />
        </View>
        <View style={styles.a_flex_row}>
          <View style={[styles.a_flex1, styles.a_flex1_layout]}>
            <View style={styles.a_flex1_col}>
            <TouchableOpacity
            onPress={() => navigate("DessertMap", {name: "DessertMap"})}>
              <View style={[styles.b_group1, styles.m_group1_layout]}>
                <View style={[styles.m_like_box, styles.m_like_box_layout]}>
                  <Text style={styles.m_like} ellipsizeMode={'clip'}>
                    {'Like'}
                  </Text>
                </View>
              </View>
              </TouchableOpacity>
            </View>
            <View style={styles.m_flex1_space} />
            <View style={styles.m_flex1_col}>
            <TouchableOpacity
            onPress={() => navigate("Dessert", {name: "Dessert"})}>
              <View style={[styles.b_group2, styles.m_group2_layout]}>
                <View style={[styles.m_dislike_box, styles.m_dislike_box_layout]}>
                  <Text style={styles.m_dislike} ellipsizeMode={'clip'}>
                    {'Dislike'}
                  </Text>
                </View>
              </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      </View>
    </ScrollView>
   );
  }
}
////////////////////////////////
const alcoholMap =[{id:0, src:require('./src/assets/map/29.png')},{id:1, src:require('./src/assets/map/30.png')},{id:2, src:require('./src/assets/map/31.png')}, {id:3, src:require('./src/assets/map/32.png')},{id:4, src:require('./src/assets/map/33.png')} ,{id:5, src:require('./src/assets/map/34.png')},{id:6, src:require('./src/assets/map/35.png')}]


class AlcoholMap extends React.Component{
  static navigationOptions = {
    title: "Alcohol Map"
  };
  
  render() {
   const {navigate} = this.props.navigation;
   return(
    <ScrollView>
    <View style={[styles.mp_content_box, styles.mp_content_box_layout]}>
      <View style={styles.mp_content_box_row}>
                <View style={[styles.cover_group, styles.cover_group_layout]}>
                <View style={[styles.main_box, styles.a_main_box_layout]}>
                </View>
              </View>
        <Image 
        style={{
            justifyContent: 'center', 
            flexDirection: 'column',
            height: 300,
            width: 300,
            marginLeft: 'auto',
            marginRight: 'auto',
            borderRadius: 10
          }}
        source={alcoholMap[num].src}
        />
      <View style={styles.mp_content_box_row}>
              <View style={[styles.mp_cover_group, styles.mp_cover_group_layout]}>
                <TouchableOpacity
            onPress={() => navigate("Main", {name: "Main"})}>
                <View style={[styles.mp_main_box, styles.mp_main_box_layout]}>
                  <Text style={styles.mp_main} ellipsizeMode={'clip'}>
                    {'Press to go Main'}
                  </Text>
                </View>
                </TouchableOpacity>
              </View>
      </View>
    </View>
    </View>
    </ScrollView>
   );
  }
}

/////////////////////////////
 const dessertMap =[{id:0, src:require('./src/assets/map/1.png')},{id:1, src:require('./src/assets/map/2.png')},{id:2, src:require('./src/assets/map/3.png')}, {id:3, src:require('./src/assets/map/4.png')},{id:4, src:require('./src/assets/map/5.png')} ,{id:5, src:require('./src/assets/map/6.png')},{id:6, src:require('./src/assets/map/7.png')}, {id:7, src:require('./src/assets/map/24.png')}, {id:8, src:require('./src/assets/map/25.png')},{id:9, src:require('./src/assets/map/26.png')},{id:10, src:require('./src/assets/map/27.png')},{id:11, src:require('./src/assets/map/8.png')},{id:12, src:require('./src/assets/map/9.png')}, {id:13, src:require('./src/assets/map/10.png')}, {id:14, src:require('./src/assets/map/11.png')},{id:15, src:require('./src/assets/map/12.png')},{id:16, src:require('./src/assets/map/13.png')},{id:17, src:require('./src/assets/map/14.png')},{id:18, src:require('./src/assets/map/15.png')}, {id:19, src:require('./src/assets/map/16.png')}, {id:20, src:require('./src/assets/map/17.png')},{id:21, src:require('./src/assets/map/18.png')},{id:22, src:require('./src/assets/map/19.png')},{id:23, src:require('./src/assets/map/20.png')},{id:24, src:require('./src/assets/map/21.png')},{id:25, src:require('./src/assets/map/22.png')},{id:26, src:require('./src/assets/map/23.png')},{id:27, src:require('./src/assets/map/28.png')}]

 class DessertMap extends React.Component{
  static navigationOptions = {
    title: "Dessert Map"
  };
  
  render() {
   const {navigate} = this.props.navigation;
   return(
    <ScrollView>
    <View style={[styles.mp_content_box, styles.mp_content_box_layout]}>
      <View style={styles.mp_content_box_row}>
                <View style={[styles.cover_group, styles.cover_group_layout]}>
                <View style={[styles.main_box, styles.a_main_box_layout]}>
                </View>
              </View>
        <Image 
        style={{
            justifyContent: 'center', 
            flexDirection: 'column',
            height: 300,
            width: 300,
            marginLeft: 'auto',
            marginRight: 'auto',
            borderRadius: 10
          }}
        source={dessertMap[num].src}
        />
      <View style={styles.mp_content_box_row}>
              <View style={[styles.mp_cover_group, styles.mp_cover_group_layout]}>
                <TouchableOpacity
            onPress={() => navigate("Main", {name: "Main"})}>
                <View style={[styles.mp_main_box, styles.mp_main_box_layout]}>
                  <Text style={styles.mp_main} ellipsizeMode={'clip'}>
                    {'Press to go Main'}
                  </Text>
                </View>
                </TouchableOpacity>
              </View>
      </View>
    </View>
    </View>
    </ScrollView>
   );
  }
}
//////////////////////////////////////////////////////
Main.inStorybook = true;
Main.fitScreen = false;
Main.scrollHeight = 800;

const styles = StyleSheet.create({
   
  group: {
    width: '100%',
    backgroundColor: '#ffffffff',
    overflow: 'hidden',
    flexGrow: 1
  },
  group_layout: {
    overflow: 'hidden',
    marginTop: 0,
    marginBottom: 0,
    minHeight: 875,
    maxHeight: '100%',
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0
  },
  flex: {},
  flex_layout: {
    overflow: 'visible',
    marginTop: 30,
    marginBottom: 30,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0
  },
  flex_row: {
    flexGrow: 1,
    flexShrink: 1
  },
  highlights_box_layout: {
    marginTop: 30,
    marginBottom: 0,
    marginLeft: 30,
    flexGrow: 1,
    marginRight: 32
  },
  highlights: {
    color: '#4d4d4dff',
    textAlign: 'left',
    letterSpacing: 0,
    fontSize: 18,
    fontWeight: '400',
    fontStyle: 'normal',
    paddingHorizontal: 0,
    paddingVertical: 0
  },
  highlights_box: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  img: {
    resizeMode: 'contain'
  },
  img_layout: {
    marginTop: 10,
    height: 117,
    marginBottom: 0,
    marginLeft: 'auto',
    marginRight: 'auto',
    width: 149,
    minWidth: 149
  },
  content_box: {
    backgroundColor: '#ffeca8ff',
    borderRadius: 10,
    flexDirection: 'row'
  },
  content_box_layout: {
    overflow: 'visible',
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 10.34,
    flexGrow: 1,
    marginRight: 9.66
  },
  content_box_space: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 58
  },
  content_box_col: {
    flexGrow: 1,
    flexShrink: 1,
    minWidth: 0
  },
  meal_box_layout: {
    marginTop: 60.5,
    marginBottom: 55.5,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0
  },
  meal: {
    color: '#4d4d4dff',
    textAlign: 'center',
    alignItems: 'center',
    letterSpacing: 0,
    fontSize: 35,
    fontWeight: '700',
    fontStyle: 'normal',
    paddingHorizontal: 0,
    paddingVertical: 0
  },
  meal_box: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  content_box_space1: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 10
  },
  content_box_col1: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 130
  },
  img_layout1: {
    marginTop: 55,
    height: 68,
    marginBottom: 55,
    marginLeft: 0,
    width: 72,
    minWidth: 72
  },
  flex1: {
    flexDirection: 'row'
  },
  flex1_layout: {
    overflow: 'visible',
    marginTop: 13.75,
    marginBottom: 0,
    marginLeft: 10,
    flexGrow: 1,
    marginRight: 10
  },
  flex1_col: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 163
  },
  content_box1: {
    backgroundColor: '#ffbbbbff',
    borderRadius: 10,
    flexDirection: 'row'
  },
  content_box1_layout: {
    overflow: 'visible',
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0
  },
  content_box1_space: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 22
  },
  content_box1_col: {
    flexGrow: 1,
    flexShrink: 1,
    minWidth: 0
  },
  alcohol_box_layout: {
    marginTop: 43,
    marginBottom: 43,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0
  },
  alcohol: {
    color: '#4d4d4dff',
    textAlign: 'left',
    letterSpacing: 0,
    fontSize: 28,
    fontWeight: '400',
    fontStyle: 'normal',
    paddingHorizontal: 0,
    paddingVertical: 0
  },
  alcohol_box: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  content_box1_space1: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 3
  },
  content_box1_col1: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 39
  },
  img_layout2: {
    marginTop: 41.5,
    height: 37,
    marginBottom: 41.5,
    marginLeft: 0,
    width: 17,
    minWidth: 17
  },
  flex1_space: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 14
  },
  content_box2: {
    backgroundColor: '#a0e6f0ff',
    borderRadius: 10,
    flexDirection: 'row'
  },
  content_box2_layout: {
    overflow: 'visible',
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0
  },
  content_box2_space: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 12.5
  },
  content_box2_col: {
    flexGrow: 1,
    flexShrink: 1,
    minWidth: 0
  },
  dessert_box_layout: {
    marginTop: 43,
    marginBottom: 43,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0
  },
  dessert: {
    color: '#4d4d4dff',
    textAlign: 'left',
    letterSpacing: -0.14,
    fontSize: 28,
    fontWeight: '400',
    fontStyle: 'normal',
    paddingHorizontal: 0,
    paddingVertical: 0
  },
  dessert_box: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  content_box2_space1: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 4
  },
  content_box2_col1: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 40.5
  },
  icon: {
    resizeMode: 'contain'
  },
  icon_layout: {
    marginTop: 46.5,
    height: 27,
    marginBottom: 46.5,
    marginLeft: 0,
    width: 28,
    minWidth: 28,
    marginRight: 12.5
  },
  cover_group: {
    width: '100%',
    backgroundColor: '#f29c8f'
  },
  cover_group_layout: {
    overflow: 'visible',
    marginTop: 55,
    marginBottom: 0,
    Height: 55,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0
  },
  medium_title_box_layout: {
    marginTop: 11.25,
    marginBottom: 11.75,
    marginLeft: 8.27,
    flexGrow: 1,
    marginRight: 8.27
  },
  medium_title1: {
    color: '#ffffffff',
    textAlign: 'left',
    letterSpacing: 0,
    fontSize: 24,
    fontWeight: '700',
    fontStyle: 'normal',
    paddingHorizontal: 0,
    paddingVertical: 0
  },
  medium_title_box: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  cover_group1: {
    width: '100%',
    backgroundColor: '#ffd0a4ff'
  },
  cover_group1_layout: {
    overflow: 'visible',
    marginTop: 10,
    marginBottom: 13,
    minHeight: 55,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0
  },
  medium_title_box_layout1: {
    marginTop: 11.25,
    marginBottom: 11.75,
    marginLeft: 8.27,
    flexGrow: 1,
    marginRight: 8.27
  },
  medium_title2: {
    color: '#ffffffff',
    textAlign: 'left',
    letterSpacing: 0,
    fontSize: 24,
    fontWeight: '700',
    fontStyle: 'normal',
    paddingHorizontal: 0,
    paddingVertical: 0
  },
  ///////////////////////////////////////////////
  m_group1: {
    width: '100%',
    backgroundColor: '#ffbaba',
    borderRadius: 10
  },
  m_group1_layout: {
    overflow: 'visible',
    marginTop: 0,
    marginBottom: 0,
    minHeight: 75,
    maxHeight: 100,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0
  },
  m_like_box_layout: {
    marginTop: 16,
    marginBottom: 15,
    marginLeft: 22.5,
    flexGrow: 1,
    marginRight: 22.5
  },
  m_like: {
    color: '#4d4d4dff',
    textAlign: 'left',
    letterSpacing: 4,
    fontSize: 25,
    fontWeight: '400',
    fontStyle: 'normal',
    paddingHorizontal: 5,
    paddingVertical: 0,
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  m_like_box: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-end'
  },
  m_flex1_space: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 20
  },
  m_group2: {
    width: '100%',
    backgroundColor: '#a0e6f0ff',
    borderRadius: 10
  },
  m_group2_layout: {
    overflow: 'visible',
    marginTop: 0,
    marginBottom: 0,
    minHeight: 75,
    maxHeight: 100,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0
  },
  m_dislike_box_layout: {
    marginTop: 16,
    marginBottom: 15,
    marginLeft: 22.5,
    flexGrow: 1,
    marginRight: 22.5,
    width: 'auto'
  },
  m_dislike: {
    color: '#4d4d4dff',
    textAlign: 'left',
    letterSpacing: 0,
    fontSize: 25,
    fontWeight: '400',
    fontStyle: 'normal',
    paddingHorizontal: 5,
    paddingVertical: 0
  },
  m_dislike_box: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-end'
  },
  //////////////////////////////////////////mealcategory
  mc_group: {
    width: '100%',
    backgroundColor: '#ffffffff',
    overflow: 'hidden'
  },
  mc_group_layout: {
    overflow: 'hidden',
    marginTop: 0,
    marginBottom: 0,
    minHeight: 875,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0
  },
  mc_flex_1_layout: {
    overflow: 'visible',
    marginTop: 10,
    marginBottom: 0,
    marginLeft: 32,
    flexGrow: 1,
    marginRight: 32
  },
  mc_img: {
    resizeMode: 'contain'
  },
  mc_img_layout: {
    marginTop: 0,
    height: 228,
    marginBottom:0,
    width: 228,
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  mc_flex_row1: {
    flexGrow: 0,
    flexShrink: 1
  },
  mc_group1: {
    width: '100%',
    backgroundColor: '#ffbbbbff',
    borderRadius: 10
  },
  mc_group1_layout: {
    overflow: 'visible',
    marginTop: 44,
    marginBottom: 0,
    minHeight: 53,
    maxHeight: 100,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0
  },
  mc_medium_title_box_layout: {
    marginTop: 13,
    marginBottom: 11,
    marginLeft: 16,
    flexGrow: 1,
    marginRight: 16
  },
  mc_medium_title1: {
    color: '#4d4d4dff',
    textAlign: 'left',
    letterSpacing: 0,
    fontSize: 24,
    fontWeight: '700',
    fontStyle: 'normal',
    paddingHorizontal: 0,
    paddingVertical: 0
  },
  mc_medium_title_box: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  mc_flex_row2: {
    flexGrow: 1,
    flexShrink: 1
  },
  mc_group2: {
    width: '100%',
    backgroundColor: '#a0e6f0ff',
    borderRadius: 10
  },
  mc_group2_layout: {
    overflow: 'visible',
    marginTop: 20,
    marginBottom: 38,
    minHeight: 53,
    maxHeight: 100,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0
  },
  mc_medium_title2: {
    color: '#4d4d4dff',
    textAlign: 'left',
    letterSpacing: 0,
    fontSize: 24,
    fontWeight: '700',
    fontStyle: 'normal',
    paddingHorizontal: 0,
    paddingVertical: 0
  },
  ///////////////////////////////////////////////
  mp_content_box: {
    backgroundColor: '#ffffffff',
    overflow: 'hidden'
  },
  mp_content_box_layout: {
    overflow: 'hidden',
    height: 875,
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0
  },
  mp_content_box_row: {
    flexGrow: 0,
    flexShrink: 0,
    minHeight: 0
  },
  mp_cover_group: {
    width: '100%',
    marginTop: 'auto',
    backgroundColor: '#ffd0a4ff'
  },
  mp_cover_group_layout: {
    overflow: 'visible',
    marginTop: 80,
    marginBottom: 148,
    minHeight: 75,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0
  },
  mp_main_box_layout: {
    marginTop: 15,
    marginBottom: 'auto',
    width: 'auto',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  mp_main: {
    color: '#4b4b4bff',
    textAlign: 'center',
    letterSpacing: 0,
    fontSize: 25,
    fontWeight: '700',
    fontStyle: 'normal',
    paddingHorizontal: 0,
    paddingVertical: 0,
    marginTop: 'auto',
    marginBottom: 'auto'
  },
  mp_main_box: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-end'
    },
  //////////////////////////////////////
  a_group: {
    width: '100%',
    backgroundColor: '#ffffffff',
    overflow: 'hidden'
  },
  a_group_layout: {
    overflow: 'hidden',
    marginTop: 0,
    marginBottom: 10,
    minHeight: 875,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0,
  },
  a_flex: {},
  a_flex_layout: {
    overflow: 'visible',
    marginTop: 40,
    marginBottom: 0,
    marginLeft: 42,
    flexGrow: 1,
    marginRight: 42
  },
  a_flex_row: {
    flexGrow: 0,
    flexShrink: 1,
    marginBottom: 10
  },
  a_flex1: {
    flexDirection: 'row',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  a_flex1_layout: {
    overflow: 'visible',
    marginTop: 27,
    marginBottom: 41,
    minHeight: 75,
    width: 276,
    minWidth: 276,
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  a_flex1_col: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 128,
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  a_group1: {
    width: '100%',
    backgroundColor: '#ffeda8ff',
    borderRadius: 10,
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  a_group2: {
    width: '100%',
    backgroundColor: '#a0e6f0ff',
    borderRadius: 10,
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  b_group1: {
    width: '100%',
    backgroundColor: '#ffbaba',
    borderRadius: 10,
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  b_group2: {
    width: '100%',
    backgroundColor: '#ffeda8ff',
    borderRadius: 10,
    marginLeft: 'auto',
    marginRight: 'auto'
  },
})

const MainNavigator = createStackNavigator({
  Main: {screen: Main },
  MealCategory: {screen: MealCategory},
  Meal: {screen: Meal},
  Map: {screen: Map},
  Alcohol: {screen: Alcohol},
  Dessert: {screen: Dessert},
  AlcoholMap: {screen: AlcoholMap},
  DessertMap: {screen: DessertMap}
});

const App = createAppContainer(MainNavigator);
export default App;