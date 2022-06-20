#mount shared directory
mount -t cifs //<ip_address>/<remote_directory> //home/<shared_directory> -o username=<username>,password=<password>

# what to backup
backup_files="//home/<shared_directory>"

# where to backup
dest="/home/<backup_directory>"

# create archive filename
day=$[date +%A]
hostname=$[hostname -s]
archive_file="$hostname-$day.tgz"

# print start status message
echo "Backing up $backup_files to $dest/$archive_file"
date
echo

# backup the files using tar
tar czf #dest/$archive_file $backup_files

# print end status message
echo
echo "Backup finished"

# Long listing of files in #dest to check file sizes
ls -lh $dest

#umount
umount //home/<shared_directory>
