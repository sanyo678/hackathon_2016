drop table if exists countries ;

create table countries (
	id int primary key,
	name varchar(128) not null
);

insert into countries
  (id, name)
values
  (0, 'Papua New Guinea'),
  (1, 'Cambodia'),
  (2, 'Paraguay'),
  (3, 'Kazakhstan'),
  (4, 'Syria'),
  (5, 'Bahamas'),
  (6, 'Solomon Islands'),
  (7, 'Montserrat'),
  (8, 'Mali'),
  (9, 'Marshall Islands'),
  (10, 'Panama'),
  (11, 'Guadeloupe'),
  (12, 'Laos'),
  (13, 'Argentina'),
  (14, 'Falkland Islands'),
  (15, 'Virgin Islands'),
  (16, 'Seychelles'),
  (17, 'Zambia'),
  (18, 'Belize'),
  (19, 'Bahrain'),
  (20, 'Guinea-Bissau'),
  (21, 'Namibia'),
  (22, 'Finland'),
  (23, 'Faroe Islands'),
  (24, 'Comoros'),
  (25, 'Netherlands Antilles'),
  (26, 'Georgia'),
  (27, 'Saint Kitts and Nevis'),
  (28, 'Yemen'),
  (29, 'Puerto Rico'),
  (30, 'Eritrea'),
  (31, 'Madagascar'),
  (32, 'Aruba'),
  (33, 'Libya'),
  (34, 'Sweden'),
  (35, 'West Bank'),
  (36, 'Malawi'),
  (37, 'Cocos (Keeling) Islands'),
  (38, 'Poland'),
  (39, 'Svalbard'),
  (40, 'Bulgaria'),
  (41, 'Jordan'),
  (42, 'Tunisia'),
  (43, 'United Arab Emirates'),
  (44, 'Tuvalu'),
  (45, 'Kenya'),
  (46, 'French Polynesia'),
  (47, 'Lebanon'),
  (48, 'Brunei'),
  (49, 'Djibouti'),
  (50, 'Cuba'),
  (51, 'Azerbaijan'),
  (52, 'Czech Republic'),
  (53, 'Mauritania'),
  (54, 'Saint Lucia'),
  (55, 'Guernsey'),
  (56, 'Mayotte'),
  (57, 'Israel'),
  (58, 'Australia'),
  (59, 'Tajikistan'),
  (60, 'Myanmar'),
  (61, 'Cameroon'),
  (62, 'Gibraltar'),
  (63, 'Cyprus'),
  (64, 'Northern Mariana Islands'),
  (65, 'Malaysia'),
  (66, 'Iceland'),
  (67, 'Oman'),
  (68, 'Armenia'),
  (69, 'Gabon'),
  (70, 'Luxembourg'),
  (71, 'Brazil'),
  (72, 'Turks and Caicos Islands'),
  (73, 'Algeria'),
  (74, 'Jersey'),
  (75, 'Slovenia'),
  (76, 'Antigua and Barbuda'),
  (77, 'Ecuador'),
  (78, 'Colombia'),
  (79, 'South Georgia and the Islands'),
  (80, 'Moldova'),
  (81, 'Vanuatu'),
  (82, 'Italy'),
  (83, 'Honduras'),
  (84, 'Antarctica'),
  (85, 'Nauru'),
  (86, 'Haiti'),
  (87, 'Burundi'),
  (88, 'Afghanistan'),
  (89, 'Singapore'),
  (90, 'French Guiana'),
  (91, 'American Samoa'),
  (92, 'Christmas Island'),
  (93, 'Russia'),
  (94, 'Netherlands'),
  (95, 'China'),
  (96, 'Martinique'),
  (97, 'Saint Pierre and Miquelon'),
  (98, 'Kyrgyzstan'),
  (99, 'Korea'),
  (100, 'Reunion'),
  (101, 'Bhutan'),
  (102, 'Romania'),
  (103, 'Togo'),
  (104, 'Philippines'),
  (105, 'Cote dIvoire'),
  (106, 'Congo (Kinshasa)'),
  (107, 'Uzbekistan'),
  (108, 'British Virgin Islands'),
  (109, 'Zimbabwe'),
  (110, 'Midway Islands'),
  (111, 'British Indian Ocean Territory'),
  (112, 'Montenegro'),
  (113, 'Dominica'),
  (114, 'Indonesia'),
  (115, 'Benin'),
  (116, 'Angola'),
  (117, 'Sudan'),
  (118, 'East Timor'),
  (119, 'Portugal'),
  (120, 'New Caledonia'),
  (121, 'Grenada'),
  (122, 'North Korea'),
  (123, 'Greece'),
  (124, 'Cayman Islands'),
  (125, 'Mongolia'),
  (126, 'Latvia'),
  (127, 'Morocco'),
  (128, 'Iran'),
  (129, 'Johnston Atoll'),
  (130, 'Guatemala'),
  (131, 'Guyana'),
  (132, 'Iraq'),
  (133, 'Chile'),
  (134, 'Nepal'),
  (135, 'Isle of Man'),
  (136, 'Tanzania'),
  (137, 'Ukraine'),
  (138, 'Ghana'),
  (139, 'Congo (Brazzaville)'),
  (140, 'Anguilla'),
  (141, 'India'),
  (142, 'Canada'),
  (143, 'Maldives'),
  (144, 'Turkey'),
  (145, 'Belgium'),
  (146, 'Taiwan'),
  (147, 'PerГђвЂњГ‘вЂќ'),
  (148, 'South Africa'),
  (149, 'Trinidad and Tobago'),
  (150, 'Bermuda'),
  (151, 'Central African Republic'),
  (152, 'Jamaica'),
  (153, 'Peru'),
  (154, 'Turkmenistan'),
  (155, 'Germany'),
  (156, 'Fiji'),
  (157, 'Hong Kong'),
  (158, 'Guinea'),
  (159, 'United States'),
  (160, 'Chad'),
  (161, 'Somalia'),
  (162, 'Sao Tome and Principe'),
  (163, 'Thailand'),
  (164, 'Equatorial Guinea'),
  (165, 'Kiribati'),
  (166, 'Costa Rica'),
  (167, 'Vietnam'),
  (168, 'Nigeria'),
  (169, 'Kuwait'),
  (170, 'Croatia'),
  (171, 'Cook Islands'),
  (172, 'Uruguay'),
  (173, 'Sri Lanka'),
  (174, 'United Kingdom'),
  (175, 'Switzerland'),
  (176, 'Samoa'),
  (177, 'Spain'),
  (178, 'Palestine'),
  (179, 'Liberia'),
  (180, 'Venezuela'),
  (181, 'Burkina Faso'),
  (182, 'Swaziland'),
  (183, 'Palau'),
  (184, 'Estonia'),
  (185, 'Wallis and Futuna'),
  (186, 'Niue'),
  (187, 'Austria'),
  (188, 'South Korea'),
  (189, 'Mozambique'),
  (190, 'El Salvador'),
  (191, 'Monaco'),
  (192, 'Guam'),
  (193, 'Lesotho'),
  (194, 'Tonga'),
  (195, 'Western Sahara'),
  (196, 'South Sudan'),
  (197, 'Hungary'),
  (198, 'Japan'),
  (199, 'Belarus'),
  (200, 'Mauritius'),
  (201, 'Albania'),
  (202, 'Norfolk Island'),
  (203, 'New Zealand'),
  (204, 'Senegal'),
  (205, 'Macedonia'),
  (206, 'Ethiopia'),
  (207, 'Egypt'),
  (208, 'Macau'),
  (209, 'Sierra Leone'),
  (210, 'Bolivia'),
  (211, 'Malta'),
  (212, 'Wake Island'),
  (213, 'Saudi Arabia'),
  (214, 'Cape Verde'),
  (215, 'Pakistan'),
  (216, 'Gambia'),
  (217, 'Ireland'),
  (218, 'Qatar'),
  (219, 'Slovakia'),
  (220, 'France'),
  (221, 'Serbia'),
  (222, 'Lithuania'),
  (223, 'Bosnia and Herzegovina'),
  (224, 'Niger'),
  (225, 'Rwanda'),
  (226, 'Burma'),
  (227, 'Bangladesh'),
  (228, 'Nicaragua'),
  (229, 'Barbados'),
  (230, 'Norway'),
  (231, 'Botswana'),
  (232, 'Saint Vincent and the Grenadines'),
  (233, 'Denmark'),
  (234, 'Dominican Republic'),
  (235, 'Uganda'),
  (236, 'Mexico'),
  (237, 'Micronesia'),
  (238, 'Suriname'),
  (239, 'Greenland'),
  (240, 'Saint Helena')
;

commit;
