from django.db import models

# Create your models here.

class Documentation(models.Model):
    functionName = models.CharField(max_length=100)
    description = models.TextField()
    defType = models.CharField(max_length=50)
    isTested = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.functionName} + {self.description} + {self.defType} + {self.isTested}"