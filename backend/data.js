const bcrypt = require ('bcryptjs');
const data = {
    users: [
        {
            name: 'Manel',
            email: 'manel.gueddari@gmail.com',
            password: bcrypt.hashSync('1234',8),
            isAdmin:true,
        },
        {
            name: 'Fatma',
            email: 'fatma.farhat@gmail.com',
            password: bcrypt.hashSync('1234',8),
            isAdmin:false,
        },
    ],
    products : [
        {
    
            name:'MIO Arduino Starter Kit',
            category : 'Arduino',
            image:'/images/p1.png',
            price:12.90,
            rating:4.5,
            numReviews:10,
            countInStock:1,
            description:'MIO Arduino Starter Kit is a modular expansion board that is compatible with both Arduino UNO and Arduino Leonardo development boards. The I/O ports of the motherboard are led to the expansion board for unified layout with the addition of four M5S modular components out of the box.',
        },
        {
         
            name:'Arduino Mega2560 Rev3',
            category : 'Arduino',
            image:'/images/p2.jpg',
            price:64.90 ,
            rating:4.0,
            numReviews:15,
            countInStock:2,
            description:'The Arduino Mega 2560 Rev3 is a microcontroller board based on the ATmega2560 (datasheet). It has 54 digital input/output pins (of which 14 can be used as PWM outputs), 16 analog inputs, 4 UARTs (hardware serial ports), a 16 MHz crystal oscillator, a USB connection, a power jack, an ICSP header, and a reset button.',
        },
        {
         
            name:'ARDUINO MKR VIDOR 4000',
            category : 'Arduino',
            image:'/images/p3.jpg',
            price:70.90,
            rating:3.5,
            numReviews:20,
            countInStock:3,
            description:'With the MKR VIDOR 4000 you can configure it the way you want; you can essentially create your own controller board',
        },
        {
          
            name:'Arduino Uno Rev3',
            category : 'Arduino',
            image:'/images/p4.webp',
            price:24.95 ,
            rating:5,
            numReviews:12,
            countInStock:4,
            description:'The Arduino Uno Rev 3 is a microcontroller board based on the ATmega328, an 8-bit microcontroller with 32KB of Flash memory and 2KB of RAM. Arduino Uno is the first in a series of USB-based Arduino boards.',
        },
        {
        
            name:'Raspberry Pi Compute',
            category : 'Rasperry Pi',
            image:'/images/p5.png',
            price:70.00,
            rating:4.5,
            numReviews:13,
            countInStock:5,
            description:'Raspberry Pi Compute Module 4 harnesses the computing power of the popular Raspberry Pi 4 Model B, bringing it to a smaller form factor suitable for integration into products. This version of the Raspberry Pi Compute Module 4 includes a high-performance 64-bit quad-core processor 8GB LPDDR4 RAM dual-display support at resolutions up to 4K hardware video decode at up to 4Kp60 Gigabit Ethernet USB 2.0 dual camera interfaces, PCIe Gen 2 x1 interface, and dual-band 2.4/5.0GHz wireless LAN and Bluetooth 5.0',
        },
        {
        
            name:'Raspberry Pi Router',
            category : 'Rasperry Pi',
            image:'/images/p6.jpg',
            price:54.90,
            rating:4.5,
            numReviews:13,
            countInStock:5,
            description:'CM4 Router Board is an expansion board based on the Raspberry Pi Compute Module 4. It brings Raspberry Pi CM4 two full-speed gigabit network ports and offers better performance, lower CPU usage, and higher stability for a long time work compared with a USB network card. Compatible with Raspberry OS, Ubuntu Server and other Raspberry Pi systems. After simple setting up OpenWRT, an open-source router system,you can make your raspberry pi to a router.',
        },
        {
        
            name:'PIzza Raspberry Pi',
            category : 'Rasperry Pi',
            image:'/images/p7.jpg',
            price:159.00,
            rating:4.5,
            numReviews:13,
            countInStock:5,
            description:'PIzza is a micro server based on the Raspberry Pi Compute Module 4, designed for makers and commercial applications alike. With diverse connectivity options and expandable storage, it can be used for various networking or multimedia applications.',
        },
        {
        
            name:'UPS Module for Raspberry Pi',
            category : 'Rasperry Pi',
            image:'/images/p8.jpg',
            price:14.99,
            rating:4.5,
            numReviews:13,
            countInStock:5,
            description:'UPS Module For Raspberry Pi Pico, Uninterruptible Power Supply,Keeps Your Pico Running While Recharging, Monitoring Battery Status Via I2C.',
        },
        {
        
            name:'M.A.R.K. - Make A Robot Kit',
            category : 'Robotics',
            image:'/images/p9.jpg',
            price:218.90,
            rating:4.5,
            numReviews:13,
            countInStock:5,
            description:'MARK, short for Make A Robot Kit, is designed around a Kendryte K210-based machine vision module and an Arduino-compatible baseboard. With this AI robot kit, users can have the hands-on experience of constructing and assembling an AI robot car and implementing artificial intelligence technologies such as image recognition, object detection, computer vision, and automated self-driving controls. MARK simplify the learning process and help beginners get started with machine learning, computer version in a more enjoyable way.',
        },
        {
        
            name:'TFmini-i LiDAR',
            category : 'Robotics',
            image:'/images/p10.jpg',
            price:71.90,
            rating:4.5,
            numReviews:13,
            countInStock:5,
            description:'TFmini-i LiDAR - Distance Sensor (12m) with CAN Interface SKU 101090022 TFmini-i is a single point LiDAR, which is based on Pulse Time of Flight (PTOF). It adopts an incoherent energy receiving mode, and the detection is mainly based on Pulse counting. TFmini-i emits a narrow pulse laser, which is collimated by the transmitting lens to form a collimated light, which enters the receiving system after being reflected by the measured target and is focused on the APD detector by the receiving lens. The time between the transmitted signal and the received signal is calculated through the circuit amplification and filtering, and the distance between TFmini-i and the measured target can be calculated through the speed of light.',
        },
        {
        
            name:'TF03-100 LiDAR',
            category : 'Robotics',
            image:'/images/p11.jpg',
            price:225.00,
            rating:4.5,
            numReviews:13,
            countInStock:5,
            description:'TF03-100 LiDAR is an industrial-grade long-range distance sensor. Its maximum detection range can reach up to 100m and it has an adjustable frame rate with a maximum of 1KHz. With an integrated compensating algorithm for outdoor glare and other interference, TF03-100 can work under a strong light environment, rain, fog, and snow conditions. It also has an aluminum alloy enclosure with IP67 water and dust resistance. Multiple built-in operating modes are included for the users to change its parameters and configurations to meet different applications.',
        },
        {
        
            name:'Hermes - Cross Floor',
            category : 'Robotics',
            image:'/images/p12.png',
            price:5600.00,
            rating:3.5,
            numReviews:13,
            countInStock:5,
            description:'Hermes is a scalable and low-cost robot platform capable of meeting the needs of small-to medium-sized robot application development in areas such as smart patrol robots, container transportation robots, hotel delivery robots, food delivery robots, and more.',
        },
        {
        
            name:'Bittle Sensor Pack',
            category : 'Robotics',
            image:'/images/p13.jpg',
            price:89.90,
            rating:2.5,
            numReviews:13,
            countInStock:5,
            description:'This is the sensor expansion package of the Bittle robot dog. It can give Bittle robot dog visual recognition, voice recognition, feeling environment, and other abilities, making it a smart dog~',
        },
        {
        
            name:'OakSense H60Q-QVGA',
            category : 'Sensors',
            image:'/images/p14.webp',
            price:499.00,
            rating:4.5,
            numReviews:13,
            countInStock:5,
            description:'The OakSense H60Q is a high accuracy camera kit built with MLX75026 ToF sensor programmed by C++ or Python. It features 5 meters distance detect, SDK data output, available for Windows, Linux, Mac, all of which makes it suitable for visualizer, 3D mode,exchangeable sensor optics.',
        },
        {
        
            name:' Grove-CO2 & Temperature & Humidity',
            category : 'Sensors',
            image:'/images/p15.png',
            price:52.90,
            rating:4.5,
            numReviews:13,
            countInStock:5,
            description:'The Grove - CO2 & Temperature & Humidity Sensor - SCD41 is a small but powerful module made by Sensirion. It is a multiple function sensor that can measure temperature, humidity, and CO2 at the same time. It is based on the SCD41 module and you can use this sensor in your GPS, IoT devices, or other devices which need those four parameters.',
        },
        {
        
            name:'Grove - Formaldehyde Sensor',
            category : 'Sensors',
            image:'/images/p16.jpg',
            price:54.00,
            rating:4.5,
            numReviews:13,
            countInStock:5,
            description:'Grove Formaldehyde Sensor can detect formaldehyde around 0~1000 ppb with low cross-sensitivity to alcohol and high stability of 6 years lifetime. Built-in RHT sensor ensures it maintains fine performance under different temperatures and humidity and it transmits data through UART and I2C ports.           ',
        },
        {
        
            name:'Sensor MODBUS RS485',
            category : 'Sensors',
            image:'/images/p17.png',
            price:125.00,
            rating:3.5,
            numReviews:13,
            countInStock:5,
            description:'The Liquid Level Sensor is designed with industry-grade standards, for monitoring water level, oil level, and other mild-corrosive liquid levels. It incorporates stainless steel and insulated rubber, is IP68 rated, suitable for application in severe environments and uses the RS485 Modbus-RTU Protocol.',
        },
        {
        
            name:'24GHz mmWave Radar Sensor',
            category : 'Sensors',
            image:'/images/p18.webp',
            price:32.00,
            rating:2.5,
            numReviews:13,
            countInStock:5,
            description:'The mmWave Radar fall detection module is a self-contained, privacy-protectively, safety mmWave module operating at 24GHz. With the enhanced Infineon Doppler radar and the standard algorithm, the module is an ideal solution for individual applications like elderly health care, smart home, and danger alarm.',
        },
        {
        
            name:'Industrial Leaf Wetness',
            category : 'Sensors',
            image:'/images/p19.png',
            price:95.00,
            rating:4.5,
            numReviews:13,
            countInStock:5,
            description:'S-YM-01 Sensor comes in the shape of a leaf, simulating the wetness and temperature on a real leaf. It measures leaf wetness and temperature, providing insights for pest control, irrigation, and other management that are optimal for plant and crop health. The sensor is IP68 rated and the output signal can be RS485, Analog Voltage, or Analog Current. It can be widely used in applications of farming in the outdoor, in greenhouses, plant research, and other scenarios where leaf wetness and temperature are important. ',
        },
    ]
}
module.exports=data