

//นำเข้า วิว,ข้อความ จาก
import {View,Text,StyleSheet,Image} from 'react-native';
//ส่งออก เริ่มต้น ฟังก์ชัน ชื่อฟังก์ชัน

export default function App (){
    return (
        //ใส่สไตล์ตกเเต่ง
        <View style={myStyle.container}>
        {/* เเสดงข้อความ */}
            <Text style={myStyle.title}>Rachadaporn</Text>

            {/* เเสดงภาพจากไฟล์ */}
            <Image
             source={require('@/assets/images/images.webp')}
             style ={{
                width: 200,//กว้่าง
                height:200,//สูง
                borderRadius : 100,//ความโค่้งของมุม
                borderWidth : 5,//ความกว้างของขบ
                borderColor: "#ef92f4"//สีของขอบ
             }}
            />
            {/* ใส่ภาพจากลิ้ง */}
            <Image
            source={{uri : "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhEgns5lf72PGq6y97CXH7IHD5ncaggDN0czgtCIdEXZbko6NtmZDU7l-CZ-T9dvn_2uEHxrPQ_puY7o-ccJ9_g8PQPd6xrH49_jXB7ExJ_wYnIw2n2ZA6LBjn5YsAm8T0Jx6aqCnPJQG8/s1600/About+Cinderella.jpg"}}
            style={{
                width: 200,//กว้่าง
                height:200,//สูง
                borderRadius : 100,//ความโค่้งของมุม
                borderWidth : 5,//ความกว้างของขบ
                borderColor: "#5ec8ef"//สีของขอบ

            }}
            /> 
            {/* จัดเเนวนอน */}
            <View style={{flexDirection: "row"}}>
                <Text>🐶</Text>
                <Text>🦋</Text>
                <Text>🐰</Text>
                <Text>🐻</Text>
                

                


            </View>
        </View>
    )
}
  
const myStyle = StyleSheet.create({
    // สไตล์ของกล่อง
    container:{
        backgroundColor:"#ffe4e1", //สีพื้นหลัง
        flex:1, //ขยาย
        paddingTop: 80, // เพิ่มช่องว่างด้านบนในกล่อง
        alignItems : "center",
    },
    title:{
        color: "blue", // สีอักษร
        fontSize: 26, // ขนาดอักษร
        fontWeight: 500, // ความหนาตัวอักษร
        textAlign: "center", // จัดเเนวการวาง


        }
})
