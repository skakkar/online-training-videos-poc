INSERT INTO sample_database.student(full_name,password,role,username)  values('admin','admin','ADMIN','admin@gmail.com');
INSERT INTO sample_database.student(full_name,password,role,username)  values('rajesh','rajesh','USER','rajesh.rajoji@gmail.com');
INSERT INTO sample_database.course(description,name,preview_image,session_number, title,video_url,course_mode)  
values('Basic of Core Java Part 1',
'Java','fab fa-java fa-10x java-color d-none d-md-block','Java_Session_1', 'Core Java Session 1', 'grEKMHGYyns', 'ONLINE');
INSERT INTO sample_database.course(description,name,preview_image,session_number, title,video_url,course_mode)  
values('Basic of Core Java Part 2',
'Java Adv','fab fa-java fa-10x java-color d-none d-md-block','Java_Session_2', 'Core Java Session 2', 'vJ-Zn4fo0MQ', 'CLASSROOM');
INSERT INTO sample_database.course(description,name,preview_image,session_number, title,video_url,course_mode)  
values('First Python Tutorial',
'Python','fab fa-python fa-10x python-color d-none d-md-block','Python_Session_1', 'Python Session 1', '_uQrJ0TkZlc', 'ONLINE');
INSERT INTO sample_database.course(description,name,preview_image,session_number, title,video_url,course_mode)  
values('First Python Tutorial',
'Python Adv','fab fa-python fa-10x python-color d-none d-md-block','Python_Session_1', 'Python Session 1', '_uQrJ0TkZlc', 'CLASSROOM');
INSERT INTO sample_database.course_section(description,name,course_id)  values('Intro','Getting Started',(select id from sample_database.course where name='Java'));
INSERT INTO sample_database.course_section(description,name,course_id)  values('The Basics','The Basics',(select id from sample_database.course where name='Java'));
INSERT INTO sample_database.course_section(description,name,course_id)  values('Intro','Getting Started',(select id from sample_database.course where name='Java Adv'));
INSERT INTO sample_database.course_section(description,name,course_id)  values('The Basics','The Basics',(select id from sample_database.course where name='Java Adv'));
INSERT INTO sample_database.course_section(description,name,course_id)  values('Intro','Getting Started',(select id from sample_database.course where name='Python'));
INSERT INTO sample_database.course_section(description,name,course_id)  values('The Basics','The Basics',(select id from sample_database.course where name='Python'));
INSERT INTO sample_database.course_section(description,name,course_id)  values('Intro','Getting Started',(select id from sample_database.course where name='Python Adv'));
INSERT INTO sample_database.course_section(description,name,course_id)  values('The Basics','The Basics',(select id from sample_database.course where name='Python Adv'));
INSERT INTO sample_database.course_content(name,video_url,course_section_id) values( 'Getting Started','r59xYe3Vyks',(select id from sample_database.course_section c where c.name='Getting Started' and c.description='Intro' and c.course_id in (select id from sample_database.course where name='Java')));
INSERT INTO sample_database.course_content(name,video_url,course_section_id) values( 'Introduction','qgMH6jOOFOE',(select id from sample_database.course_section c where c.name='The Basics' and c.description='The Basics' and c.course_id in (select id from sample_database.course where name='Java')));
INSERT INTO sample_database.course_content(name,video_url,course_section_id) values( 'Hello World App','gzlhm0jco0g',(select id from sample_database.course_section c where c.name='Getting Started' and c.description='Intro' and c.course_id in (select id from sample_database.course where name='Java Adv')));
INSERT INTO sample_database.course_content(name,video_url,course_section_id) values( 'Getting Started','xCixkaXrVMI',(select id from sample_database.course_section c where c.name='The Basics' and c.description='The Basics' and c.course_id in (select id from sample_database.course where name='Java Adv')));
INSERT INTO sample_database.course_content(name,video_url,course_section_id) values( 'Introduction','WvhQhj4n6b8',(select id from sample_database.course_section c where c.name='Getting Started' and c.description='Intro' and c.course_id in (select id from sample_database.course where name='Python')));
INSERT INTO sample_database.course_content(name,video_url,course_section_id) values( 'Hello World App','KOdfpbnWLVo',(select id from sample_database.course_section c where c.name='The Basics' and c.description='The Basics' and c.course_id in (select id from sample_database.course where name='Python Adv')));
