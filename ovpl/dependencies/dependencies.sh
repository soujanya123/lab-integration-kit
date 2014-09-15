#!/bin/bash


yum install git
yum install gcc python-devel

p=$(pwd)

cp ubuntu-12.04-custom-x86_64.tar.gz /root/vz/template/cache
echo "Installing Python"
yum groupinstall "Development tools"
yum install zlib-devel bzip2-devel openssl-devel ncurses-devel sqlite-devel readline-devel tk-devel gdbm-devel db4-devel libpcap-devel xz-devel
echo "Python installation process complete with above status"


echo "Installing MongoDB"
cp ./mongodb.repo /etc/yum.repos.d/mongodb.repo
yum install mongodb-org
echo "MongoDB installation process complete with above status"

echo "Installing pymongo"
#echo "Path is $p"
git clone git://github.com/mongodb/mongo-python-driver.git pymongo
py="$p/pymongo"
cd $py
python setup.py install
echo "pymongo installation process complete with above status"

clear

cd $p
echo "Installing sh"

sh_p="$p/sh1"
cd $sh_p
python setup.py install
echo "sh installation process complete with above status"


echo "Installing requests"
req="$p/requests"
cd $req
python setup.py install
echo "requests installation process complete with above status"


echo "Installing tornado"
tornado_path="$p/tornado"
cd $tornado_path
python setup.py install
echo "tornado installation process complete with above status"


echo "Installing netaddr"
net_path="$p/netaddr"
cd $net_path
python setup.py install
echo "netaddr installation process complete with above status"


echo "Installing backports.ssl"
ssl_path="$p/backport"
cd $ssl_path
python setup.py install
echo "backports.ssl installation process complete with above status"

