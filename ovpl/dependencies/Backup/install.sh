!/bin/bash

# BASH guard
if ! [ -n "$BASH_VERSION" ];then
    echo "Called on Bash, if not....";
    SCRIPT=$(readlink -f "$0")
    /bin/bash $SCRIPT
    exit;
fi

clear
echo 'Installing OpenVZ...'

cd

echo http_proxy=\"http://proxy.iiit.ac.in:8080\" >> .bash_profile
echo "export http_proxy" >> .bash_profile

source .bash_profile

echo "updating..."
yum update -y

echo 'installing wget...'
yum install wget -y

echo 'Adding openvz Repo...'
cd /etc/yum.repos.d
wget http://download.openvz.org/openvz.repo
rpm --import http://download.openvz.org/RPM-GPG-Key-OpenVZ

echo 'Installing OpenVZ Kernel...'
yum install -y vzkernel

echo 'Installing additional tools...'
yum install vzctl vzquota ploop -y

echo 'Changing around some config files..'
sed -i 's/kernel.sysrq = 0/kernel.sysrq = 1/g' /etc/sysctl.conf

echo "Setting up packet forwarding..."
sed -i 's/net.ipv4.ip_forward = 0/net.ipv4.ip_forward = 1/g' /etc/sysctl.conf


echo "Allowing multiple subnets to reside on the same network interface..."
sed -i 's/#NEIGHBOUR_DEVS=all/NEIGHBOUR_DEVS=all/g' /etc/vz/vz.conf
sed -i 's/NEIGHBOUR_DEVS=detect/NEIGHBOUR_DEVS=all/g' /etc/vz/vz.conf

echo "Setting container layout to default to ploop (VM in a file)..."
sed -i 's/#VE_LAYOUT=ploop/VE_LAYOUT=ploop/g' /etc/vz/vz.conf

echo "Setting Ubuntu 12.04 64bit to be the default template..."
sed -i 's/centos-6-x86/ubuntu-12.04-x86_64/g' /etc/vz/vz.conf

echo 'Purging your sys configs...'
sysctl -p

echo "Disabling selinux..."
sed -i 's/SELINUX=enforcing/SELINUX=disabled/g' /etc/sysconfig/selinux

echo "disabling iptables..."
/etc/init.d/iptables stop && chkconfig iptables off

clear

echo "OpenVZ Is now Installed.. "
