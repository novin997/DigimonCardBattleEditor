# Digimon Card Battle Editor

## Card Memory Exploration using Ghidra

Memory Address of Imperialdramon = 021c932e

Memory Address of Omnimon I = 021c946a

Memory Address of WarGreymon = 021c95a6

Memory Address of Gabumon = 021ce07c

Memory Address of Betamon = 021ce1b8

> ##### I guess each Digimon card takes 0x13c of memory space, but there are exceptions RealMetalGreymon takes 0x152 

Memory Address of GoldenBanana = 021d8170

Memory Address of Devil Chip = 021d8252

Memory Address of Whistle = 021d8334

Memory Address of Giga Hand = 021d8416

> ##### I guess each Option card takes 0xe2 of memory space

## Example Agumon 0x021cb4da

00-01 - Card Number

02 - Card Type : 00(Digimon), 01(Option), 02(Digivolve)

03-23 - Digimon Name in String

24 - Not Sure

25 - Not Sure

26 - First Digit is the Type: Fire(0), Water(1), Grass(2), Dark(3),Rare(4). Second Digit is the level: R(0), A(1), C(2), U(3)

27 - dp

28 - p

29 - ?

30-31 - Health

32-33 - Circle Attack

34-37 - ?

38-59 - Circle Attack in String

60-61 - Triangle Attack

62-65 - ?

66-87 - Triangle Attack in String

88-89 - Cross Attack

90-93 - ?

94-114 - Cross Attack in String

142 - 0x05 First Attack(maybe)

180-181 - 0x0135 First Attack(maybe)

190-191 - Support Effect Value (E.g 300)

228 - X Effect, 01(First Attack),02(circle to 0),03(triangle to 0),04(cross to 0),05(circle counter),06(triangle counter),07(cross counter)