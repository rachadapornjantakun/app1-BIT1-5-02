

//นำเข้า วิว,ข้อความ จาก
import { View, Text, StyleSheet, Image } from 'react-native';
//ส่งออก เริ่มต้น ฟังก์ชัน ชื่อฟังก์ชัน

export default function App() {
    return (
        //ใส่สไตล์ตกเเต่ง
        <View style={myStyle.container}>
            {/* เเสดงข้อความ */}
            <Text style={myStyle.title}></Text>

            {/* เเสดงภาพจากไฟล์ */}
            <Image
                source={require('@/assets/images/images.png')}
                style={{
                    width: 200,//กว้่าง
                    height: 200,//สูง
                    borderRadius: 100,//ความโค่้งของมุม
                    borderWidth: 5,//ความกว้างของขบ
                    borderColor: "#ef92f4"//สีของขอบ
                }}
            />
            <View style={{ flexDirection: "row" }}>
                <Text>รัชฎาภรณ์ จันทะคุณ</Text>
            </View>
            <View style={{ flexDirection: "row" }}>
                <Text>รักเเฟนที่สุดในโลกกกกกก</Text>
            </View>
            <View style={myStyle.box}>
                  <Text>BIT1/5 เลขที่2</Text>
                  <Text>Email:rachadaporn.jantakun@E-tech.ac.th</Text>
                  <Text>Phone : 0832171405</Text>
            </View>
            <Text style={myStyle.title2} >ภาพกิจกรรม</Text>
            <View style={myStyle.container2}>
                <Image
                source={{uri : "https://static.thairath.co.th/media/Dtbezn3nNUxytg04aviDizx1si5FYFvDG9G45pBofrx1Xh.jpg"}}
                style={{
                    width :120,
                    height :120,
                    borderRadius :40,
                }}
                />
                <Image
                source={{uri : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9vWbEy6SkEEkK3E28d_5hLz0bD2qFN5usJbSrMJruD03KEE_az8drMKs&s=10"}}
                style={{
                    width :120,
                    height : 120,
                    borderRadius :40,
                }}
                />
                <Image
                source={{uri : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbp27zZXvIfa70FNCSuBYaltsPhiTC6GF_cREzsBRdQzsA1fKtqfF7IEQo&s=10"}}
                style={{
                    width :120,
                    height :120,
                    borderRadius :40,
                }}
                />
            </View>
        </View >
    )
}

const myStyle = StyleSheet.create({
    // สไตล์ของกล่อง
    container: {
        backgroundColor: "#ffe4e1", //สีพื้นหลัง
        flex: 1, //ขยาย
        paddingTop: 80, // เพิ่มช่องว่างด้านบนในกล่อง
        alignItems: "center",
    },
    title: {
        color: "blue", // สีอักษร
        fontSize: 26, // ขนาดอักษร
        fontWeight: 500, // ความหนาตัวอักษร
        textAlign: "center", // จัดเเนวการวาง
    },
    box: {
        width: 200,
        backgroundColor: "#85b7c3", //สีพื้นหลัง
        gap :5,
        margin:20,
        padding: 16,
        borderRadius: 20
    },
    title2 :{
        textAlign :"left",
        // backgroundColor :"#67afed",
        width :'100%',
        paddingStart : 50,

    },
    container2:{
        flexDirection: 'row',

    },

    

        
        




    

})
