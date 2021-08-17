# Given a text file file.txt, print just the 10th line of the file.

i=0
while IFS= read -r line
do
        i=$((i+1))
        if [ "$i" = "10" ]; then
                echo "$line"
                break
        fi
done < "file.txt"